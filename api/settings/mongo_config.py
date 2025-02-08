import pandas as pd

from motor.motor_asyncio import AsyncIOMotorClient
from settings.config import get_settings

class MongoDBSettings:
    def __init__(self):
        self.settings = get_settings(filename='mongoconnection.env', env_vars=["DB_NAME", "DB_USERNAME", "DB_USER_PASSWORD"])

    @property
    def connection_string(self):
        return f"mongodb://{self.settings.mongo_user}:{self.settings.mongo_password}@localhost:27017/"

class MongoDBClient:
    def __init__(self):
        self.client = AsyncIOMotorClient(MongoDBSettings().connection_string)
        self.db = self.client[MongoDBSettings().settings.mongo_database]

    async def get_collection(self, collection_name):
        return self.db[collection_name]

    async def get_exchange_rates(self, collection_name: str):
        """Получает все курсы валют из коллекции exchange_rates."""
        collection = await self.get_collection(collection_name=collection_name)  # Получаем нужную коллекцию
        return await collection.find().to_list(length=None)


async def save_currency_rates(currencies_list: list, tether: dict):
    """Сохраняет курсы валют в базу данных MongoDB."""
    mongo_client = MongoDBClient()
    collection = await mongo_client.get_collection("exchange_rates")

    # Удаляем старые данные (если это необходимо)
    await collection.delete_many({})  # Удаляет все документы в коллекции

    # Подготовка данных для вставки
    documents = [
        {
            "quotecurrency": currency['quotecurrency'],
            "mid_to": currency['mid_to'] if not pd.isna(currency['mid_to']) else 0,  # Заменяем NaN на 0
            "mid_from": currency['mid_from'] if not pd.isna(currency['mid_from']) else 0
        }
        for currency in currencies_list
    ]

    # Вставка документов в коллекцию
    if documents:
        await collection.insert_many(documents)

async def save_thb_rates(all_rates, tether: dict):
    mongo_client = MongoDBClient()
    collection = await mongo_client.get_collection("exchange_rates")

    # Удаляем старые данные (если это необходимо)
    await collection.delete_many({})  # Удаляет все документы в коллекции

    priority_tickers = ["RUB", "USD", "EUR", "RUB(nal)"]
    ordered_tickers = [
        "JPY", "MYR", "INR", "AED", "GBP",
        "SGD", "CHF", "AUD", "HKD", "CAD",
        "TWD", "KRW", "PHP", "NZD", "CNY",
        "SAR", "QAR", "BHD"
    ]

    results = []

    # Сначала обрабатываем приоритетные тикеры
    for ticker in priority_tickers:
        if ticker in all_rates:
            rate = all_rates[ticker]
            modified_rate = rate * 1.015 # Применяем 1.5% надбавку
            unmodified_rate = rate * 0.985
            results.append({
                "quotecurrency": ticker,
                "mid_from": modified_rate,
                "mid_to": unmodified_rate  # Вычитаем 1.5%
            })

    # Рассчитываем надбавочную стоимость для RUB и создаем RUB(nal)

    rub_data = next((item for item in results if item['quotecurrency'] == "RUB"), None)

    if rub_data:
        surcharge = (tether['tether']['rub'] / tether['tether']['thb']) * 0.03  # Расчет надбавочной стоимости
        results.append({
            "quotecurrency": "RUB(nal)",
            "mid_from": rub_data["mid_from"] + surcharge,
            "mid_to": rub_data["mid_to"] + surcharge
        })

    # Затем обрабатываем остальные тикеры
    for ticker in ordered_tickers:
        if ticker not in priority_tickers and ticker in all_rates:
            rate = all_rates[ticker]
            modified_rate = rate * 1.015  # Применяем 1.5% надбавку
            unmodified_rate = rate * 0.985
            results.append({
                "quotecurrency": ticker,
                "mid_from": modified_rate,
                "mid_to": unmodified_rate  # Вычитаем 1.5%
            })

    # Вставляем данные в MongoDB
    if results:
        await collection.insert_many(results)