from typing import Dict, Tuple
from fastapi import HTTPException
from src.settings.client import MongoDBClient


async def load_all_modifiers(client: MongoDBClient) -> Dict[str, Dict[str, float]]:
    cfg = await client.get_collection("tickers_config")
    return {
        doc["ticker"]: {
            "buy_modifier": doc.get("buy_modifier"),
            "sell_modifier": doc.get("sell_modifier"),
        }
        async for doc in cfg.find({}, projection={"_id": 0})
    }


async def get_exchange_doc(client: MongoDBClient) -> dict:
    doc = await (await client.get_collection("exchange_rates")).find_one()
    if not doc:
        raise HTTPException(404, "Таблица exchange_rates ещё не создана")
    return doc


def update_rate_in_doc(doc: dict, ticker: str, buy: float, sell: float) -> None:
    for r in doc["rates"]:
        if r["quotecurrency"] == ticker:
            r["buy"] = round(buy, 6)
            r["sell"] = round(sell, 6)
            return
    raise HTTPException(404, "Тикер не найден в exchange_rates")
