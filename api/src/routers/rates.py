from fastapi import APIRouter, Depends, HTTPException
from src.dependencies.auth_dependency import get_current_user
from src.settings.client import MongoDBClient
from src.models.insertion_ticker_models import  TickerModifierUpdate, TickerPriceUpdate
from src.db_operations.insertors.modifier_insertor import update_ticker_coefficients
from src.utils.rates_helpers import load_all_modifiers, get_exchange_doc, update_rate_in_doc

rates = APIRouter(prefix="/rates", tags=["Rates"])


@rates.get("/modifiers")
async def get_all_modifiers(_: dict = Depends(get_current_user)):
    async with MongoDBClient() as client:
        modifiers = await load_all_modifiers(client)

    if not modifiers:
        raise HTTPException(404, "Коллекция tickers_config пуста")

    return {"current_modifiers": modifiers}



@rates.post("/update-ticker-modifiers")
async def update_ticker_modifiers(
    data: TickerModifierUpdate,
    user: dict = Depends(get_current_user),
):
    await update_ticker_coefficients(
        ticker=data.ticker,
        modifier=data.buy_modifier,
        subtractor=data.sell_modifier,
    )

    new_buy = data.price * data.buy_modifier
    new_sell = data.price / data.sell_modifier

    async with MongoDBClient() as client:
        doc = await get_exchange_doc(client)                      # единственный документ
        update_rate_in_doc(doc, data.ticker, new_buy, new_sell)   # патч в памяти

        await (
            await client.get_collection("exchange_rates")
        ).update_one({"_id": doc["_id"]}, {"$set": {"rates": doc["rates"]}})

        modifiers = await load_all_modifiers(client)

    return {
        "message": f"{data.ticker} обновлён пользователем {user['sub']}",
        "new_values": {"buy": round(new_buy, 6), "sell": round(new_sell, 6)},
        "current_modifiers": modifiers,
    }



@rates.post("/update-price-manually")
async def update_price_manually(
    data: TickerPriceUpdate,
    user: dict = Depends(get_current_user),
):
    async with MongoDBClient() as client:
        doc = await get_exchange_doc(client)

        # берём исходную биржевую цену
        base_price = next(
            (r.get("base_price") for r in doc["rates"] if r["quotecurrency"] == data.ticker),
            None,
        )
        if base_price is None:
            raise HTTPException(404, "Тикер не найден или base_price отсутствует")

        # пересчитываем модификаторы
        buy_mod  = data.new_buy  / base_price
        sell_mod = base_price / data.new_sell

        await update_ticker_coefficients(data.ticker, buy_mod, sell_mod)

        update_rate_in_doc(doc, data.ticker, data.new_buy, data.new_sell)

        await (
            await client.get_collection("exchange_rates")
        ).update_one({"_id": doc["_id"]}, {"$set": {"rates": doc["rates"]}})

        modifiers = await load_all_modifiers(client)

    return {
        "message": f"Цена {data.ticker} обновлена пользователем {user['sub']}",
        "stored_modifiers": {
            "buy_modifier": round(buy_mod, 6),
            "sell_modifier": round(sell_mod, 6),
        },
        "current_modifiers": modifiers,
    }