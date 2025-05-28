from src.settings.client import MongoDBClient

DEFAULT_TICKERS = {
    "RUB(online transfer)": {"buy_modifier": 1.09, "sell_modifier": 1.01},
    "RUB(cash settlement)": {"buy_modifier": 1.2, "sell_modifier": 1.05},
    "USD": {"buy_modifier": 1.01, "sell_modifier": 1.0923},
    "EUR": {"buy_modifier": 1.0105, "sell_modifier": 1.0133},
    "KZT": {"buy_modifier": 1.065},
    "USDT": {"buy_modifier": 0.9675, "sell_modifier": 1.0325},
}

async def init_ticker_modifiers():
    async with MongoDBClient() as client:
        collection = await client.get_collection("tickers_config")

        for ticker, coefficients in DEFAULT_TICKERS.items():
            exists = await collection.find_one({"ticker": ticker})
            if not exists:
                await collection.insert_one({"ticker": ticker, **coefficients})
