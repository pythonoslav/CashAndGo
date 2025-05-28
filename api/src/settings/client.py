from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from pymongo.errors import PyMongoError
from loguru import logger

from src.settings.connection.mongo_connector import MongoDBSettings


class MongoDBClient:
    def __init__(self):
        self._settings = MongoDBSettings()
        self._uri = self._settings.connection_string
        self.client: AsyncIOMotorClient = AsyncIOMotorClient(self._uri)
        self.db: AsyncIOMotorDatabase = self.client[self._settings.settings.mongo_database]

    async def __aenter__(self):
        logger.debug("Connection with MongoDB has been open.")
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        self.client.close()
        logger.debug("Connection with MongoDB has been closed.")

    async def get_collection(self, collection_name: str):
        return self.db[collection_name]

    async def get_exchange_rates(self, collection_name: str):
        """Получает один документ курсов валют из коллекции exchange_rates."""
        collection = await self.get_collection(collection_name)
        try:
            result = await collection.find_one()
            return result or {}
        except PyMongoError as e:
            logger.exception(f"Exception while getting exchange rates from MongoDB: {e}")
            return {}
