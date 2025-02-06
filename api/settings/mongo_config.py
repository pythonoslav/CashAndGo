import math
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

    async def get_exchange_rates(self):
        """Получает все курсы валют из коллекции exchange_rates."""
        collection = await self.get_collection("exchange_rates")  # Получаем нужную коллекцию
        return await collection.find().to_list(length=None)


async def save_currency_rates(currencies_list: list):
    """Сохраняет курсы валют в базу данных MongoDB."""
    mongo_client = MongoDBClient()
    collection = await mongo_client.get_collection("exchange_rates")

    # Удаляем старые данные (если это необходимо)
    await collection.delete_many({})  # Удаляет все документы в коллекции

    # Подготовка данных для вставки
    documents = [
        {
            "quotecurrency": currency['quotecurrency'],
            "mid_to": currency['mid_to'] if currency['mid_to'] is not None and not (isinstance(currency['mid_to'], float) and math.isnan(currency['mid_to'])) else 0,
            "mid_from": currency['mid_from'] if currency['mid_from'] is not None and not (isinstance(currency['mid_from'], float) and math.isnan(currency['mid_from'])) else 0
        }
        for currency in currencies_list
    ]

    # Вставка документов в коллекцию
    if documents:
        await collection.insert_many(documents)
