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

    await collection.delete_many({})

    modifier = 1.0325
    subtractor = 0.9675

    priority_tickers = ["RUB", "USDT", "USD", "EUR", "RUB(cash)"]
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


            if ticker == "RUB":
                surcharge = (tether['tether']['rub'] / tether['tether']['thb']) * 0.2
                results.append({
                    "quotecurrency": "RUB(cash settlement)",
                    "mid_from": rate + surcharge,
                    "mid_to": rate + surcharge
                })
                # Хранить курс THB к RUB
                results.append({
                    "quotecurrency": "RUB(clearing settlement)",
                    "mid_from": rate * modifier,  # Модифицированный курс THB к валюте
                    "mid_to": rate * subtractor # Немодифицированный курс THB к валюте
                })
            else:
                thb_to_currency = 1 / rate
                results.append({
                    "quotecurrency": ticker,
                    "mid_from": thb_to_currency * modifier,  # Курс THB к RUB
                    "mid_to": thb_to_currency * subtractor  # Курс RUB к THB
                })

            # Добавляем USDT сразу после RUB, если он еще не добавлен
            if ticker == "RUB" and "USDT" not in [item["quotecurrency"] for item in results]:
                if tether['tether']['thb'] > 0:  # Предотвращаем деление на ноль
                    usdt_price_in_thb = tether['tether']['thb']
                    usdt_price_in_thb_modified = usdt_price_in_thb * modifier
                    usdt_price_in_thb_unmodified = usdt_price_in_thb * subtractor
                    results.append({
                        "quotecurrency": "USDT",
                        "mid_from": usdt_price_in_thb_modified,
                        "mid_to": usdt_price_in_thb_unmodified
                    })

    # Добавляем RUB(nal)
    rub_data = next((item for item in results if item['quotecurrency'] == "RUB"), None)


    # Обрабатываем остальные тикеры
    for ticker in ordered_tickers:
        if ticker not in priority_tickers and ticker in all_rates:
            rate = all_rates[ticker]
            thb_to_currency = 1 / rate
            modified_rate = thb_to_currency * modifier
            unmodified_rate = thb_to_currency * subtractor
            results.append({
                "quotecurrency": ticker,
                "mid_from": modified_rate,
                "mid_to": unmodified_rate  
            })

        # Создаем объект для вставки
    document_to_insert = {
        "updated": datetime.now(pytz.timezone('Asia/Bangkok')),
        # Время обновления с учетом тайландского часового пояса
        "rates": results  # Массив с курсами
    }

    # Вставляем документ в MongoDB
    if results:
        await collection.insert_one(document_to_insert)
