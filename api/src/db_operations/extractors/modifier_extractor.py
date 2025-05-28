from src.settings.client import MongoDBClient

async def get_ticker_coefficients(ticker: str) -> tuple[float | None, float | None]:
    """
    Получает buy_modifier и sell_modifier для конкретного тикера, если они заданы.
    Возвращает (None, None), если коэффициенты не найдены.
    """
    async with MongoDBClient() as client:
        collection = await client.get_collection("tickers_config")
        doc = await collection.find_one({"ticker": ticker})
        if doc:
            return doc.get("buy_modifier"), doc.get("sell_modifier")
        return None, None
