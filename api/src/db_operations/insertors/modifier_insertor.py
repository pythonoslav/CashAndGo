from src.settings.client import MongoDBClient

async def update_ticker_coefficients(ticker: str, modifier: float, subtractor: float):
    async with MongoDBClient() as client:
        collection = await client.get_collection("tickers_config")
        await collection.update_one(
            {"ticker": ticker},
            {"$set": {
                "buy_modifier": modifier,
                "sell_modifier": subtractor
            }},
            upsert=True
        )
