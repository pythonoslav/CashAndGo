from motor.motor_asyncio import AsyncIOMotorClient
from settings.config import get_settings

class MongoDBSettings:
    def __init__(self):
        self.settings = get_settings(filename='mongoconnection.env', env_vars=["DB_NAME", "DB_USERNAME", "DB_USER_PASSWORD"])

    @property
    def connection_string(self):
        return f"mongodb://{self.settings.mongo_user}:{self.settings.mongo_password}@mongo_db:27017/"

class MongoDBClient:
    def __init__(self):
        self.client = AsyncIOMotorClient(MongoDBSettings().connection_string)
        self.db = self.client[MongoDBSettings().settings.mongo_database]

    async def get_collection(self, collection_name):
        return self.db[collection_name]

    async def get_exchange_rates(self, collection_name: str):
        """Получает все курсы валют из коллекции exchange_rates."""
        collection = await self.get_collection(collection_name=collection_name)
        return await collection.find().to_list(length=None)


async def save_thb_rates(all_rates, tether: dict):
    mongo_client = MongoDBClient()
    collection = await mongo_client.get_collection("exchange_rates")

    # Логируем входные данные для отладки
    if not all_rates:
        print("Warning: `all_rates` пуст, данные не будут записаны!")

    await collection.delete_many({})  

    priority_tickers = ["RUB", "USD", "EUR", "RUB(cash)"]
    ordered_tickers = [
        "JPY", "MYR", "INR", "AED", "GBP",
        "SGD", "CHF", "AUD", "HKD", "CAD",
        "TWD", "KRW", "PHP", "NZD", "CNY",
        "SAR", "QAR", "BHD"
    ]

    results = []

    # Обрабатываем приоритетные тикеры
    for ticker in priority_tickers:
        if ticker in all_rates:
            rate = all_rates[ticker]
            modified_rate = rate * 1.015  
            unmodified_rate = rate * 0.985
            results.append({
                "quotecurrency": ticker,
                "mid_from": modified_rate,
                "mid_to": unmodified_rate  
            })

    # Добавляем RUB(nal)
    rub_data = next((item for item in results if item['quotecurrency'] == "RUB"), None)
    if rub_data:
        surcharge = (tether['tether']['rub'] / tether['tether']['thb']) * 0.03  
        results.append({
            "quotecurrency": "RUB(cash)",
            "mid_from": rub_data["mid_from"] + surcharge,
            "mid_to": rub_data["mid_to"] + surcharge
        })

    # Обрабатываем остальные тикеры
    for ticker in ordered_tickers:
        if ticker not in priority_tickers and ticker in all_rates:
            rate = all_rates[ticker]
            modified_rate = rate * 1.015  
            unmodified_rate = rate * 0.985
            results.append({
                "quotecurrency": ticker,
                "mid_from": modified_rate,
                "mid_to": unmodified_rate  
            })

    # Вставляем данные в MongoDB
    if results:
        await collection.insert_many(results)
