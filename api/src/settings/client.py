from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import PyMongoError
from loguru import logger

from src.settings.connection.mongo_connector import MongoDBSettings

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