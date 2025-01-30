from motor.motor_asyncio import AsyncIOMotorClient
from settings.config import get_settings

class MongoDBSettings:
    def __init__(self):
        self.settings = get_settings(filename='mongoconnection.env', env_vars=["DATABASE", "USER", "PASSWORD"])

    @property
    def connection_string(self):
        return f"mongodb://{self.settings.mongo_user}:{self.settings.mongo_password}@localhost:27017/"

class MongoDBClient:
    def __init__(self):
        self.client = AsyncIOMotorClient(MongoDBSettings().connection_string)
        self.db = self.client[MongoDBSettings().settings.mongo_database]

    async def get_collection(self, collection_name):
        return self.db[collection_name]


async def save_currency_rates(currencies_list: list):
    """Сохраняет курсы валют в базу данных MongoDB."""
    # Удаляем старые данные
    mongo_client = MongoDBClient()
    collection = await mongo_client.get_collection("exchange_rates")

    for currency in currencies_list:
        await collection.update_one(
            {"quotecurrency": currency},  # Поиск по валюте
            {"$set": {"mid": currency}},  # Обновляем mid
            upsert=True  # Создаёт новую запись, если не найдётся существующей
        )
