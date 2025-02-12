import pytz
from datetime import datetime

from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import PyMongoError
from loguru import logger

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
        try:
            result = collection.find_one()
            return await result
        except PyMongoError as e:
            logger.exception("Error fetching exchange rates from MongoDB: %s", e)
            return []


async def save_thb_rates(all_rates, tether: dict):
    mongo_client = MongoDBClient()
    collection = await mongo_client.get_collection("exchange_rates")

    # Логируем входные данные для отладки
    if not all_rates:
        print("Warning: `all_rates` пуст, данные не будут записаны!")
        return

    await collection.delete_many({})

    modifier = 1.0325
    subtractor = 0.9675

    # Задаем порядок добавления валют
    priority_tickers = [
        "RUB(online transfer)",
        "USD",
        "EUR",
        "USDT",
        "RUB(cash settlement)"
    ]

    results = []

    # Функция для добавления результата
    def add_result(quotecurrency, buy, sell):
        results.append({
            "quotecurrency": quotecurrency,
            "buy": buy,
            "sell": sell
        })

    # Обработка RUB отдельно, чтобы получить необходимые курсы
    if "RUB" in all_rates:
        rub_rate = all_rates["RUB"]
        add_result("RUB(online transfer)", rub_rate * 1.065, rub_rate / 1.02)  # online transfer

        # Обработка остальных валют
        for ticker in ["USD", "EUR"]:
            if ticker in all_rates:
                rate = all_rates[ticker]
                thb_to_currency = 1 / rate
                add_result(ticker, thb_to_currency * 1.01, thb_to_currency / 1.0075)

        if tether.get('tether', {}).get('thb', 0) > 0:
            usdt_price_in_thb = tether['tether']['thb']
            modified_usdt_price = usdt_price_in_thb * modifier
            unmodified_usdt_price = usdt_price_in_thb * subtractor
            add_result("USDT", modified_usdt_price, unmodified_usdt_price)

        add_result("RUB(cash settlement)", rub_rate * 1.2, rub_rate / 1.05)  # cash settlement


    # Теперь добавим другие валюты, которые не являются приоритетными
    ordered_tickers = [
        "JPY", "MYR", "INR", "AED", "GBP",
        "SGD", "CHF", "AUD", "HKD", "CAD",
        "TWD", "KRW", "PHP", "NZD", "CNY",
        "SAR", "QAR", "BHD"
    ]

    for ticker in ordered_tickers:
        if ticker not in priority_tickers and ticker in all_rates:
            rate = all_rates[ticker]
            thb_to_currency = 1 / rate
            add_result(ticker, thb_to_currency * modifier, thb_to_currency * subtractor)

    # Создаем объект для вставки
    document_to_insert = {
        "updated": datetime.now(pytz.timezone('Asia/Bangkok')),
        "rates": results
    }

    # Вставляем документ в MongoDB
    if results:
        await collection.insert_one(document_to_insert)