from fastapi import APIRouter, HTTPException, Depends
from src.dependencies.auth_dependency import get_current_user
from src.settings.client import MongoDBClient
from src.models.insertion_ticker_models import TickerModifierUpdate
from src.db_operations.insertors.modifier_insertor import update_ticker_coefficients

rates = APIRouter(prefix="/rates")

@rates.post("/update-ticker-modifiers")
async def update_ticker_modifiers(
    data: TickerModifierUpdate,
    user_data: dict = Depends(get_current_user)
):
    login = user_data.get("sub")

    await update_ticker_coefficients(
        ticker=data.ticker,
        modifier=data.buy_modifier,
        subtractor=data.sell_modifier
    )

    new_buy = data.price * data.buy_modifier
    new_sell = data.price / data.sell_modifier

    async with MongoDBClient() as client:
        collection = await client.get_collection("exchange_rates")
        document = await collection.find_one()

        if not document:
            raise HTTPException(status_code=404, detail="Курсы ещё не обновлены")

        found = False
        for rate in document.get("rates", []):
            if rate["quotecurrency"] == data.ticker:
                rate["buy"] = round(new_buy, 6)
                rate["sell"] = round(new_sell, 6)
                found = True
                break

        if not found:
            raise HTTPException(status_code=404, detail="Тикер не найден в exchange_rates")

        await collection.update_one(
            {"_id": document["_id"]},
            {"$set": {"rates": document["rates"]}}
        )

        config_collection = await client.get_collection("tickers_config")
        cursor = config_collection.find({})
        tickers_config = await cursor.to_list(length=None)

        all_modifiers = {
            ticker["ticker"]: {
                "buy_modifier": ticker.get("buy_modifier", 1.0),
                "sell_modifier": ticker.get("sell_modifier", 1.0)
            }
            for ticker in tickers_config
        }

    return {
        "message": f"Коэффициенты для {data.ticker} обновлены пользователем {login}.",
        "new_values": {
            "buy": round(new_buy, 6),
            "sell": round(new_sell, 6)
        },
        "current_modifiers": all_modifiers
    }
