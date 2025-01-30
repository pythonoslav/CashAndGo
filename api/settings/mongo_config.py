from motor.motor_asyncio import AsyncIOMotorClient
from settings.config import get_settings

class MongoDBSettings:
    def __init__(self):
        self.settings = get_settings(filename='mongoconnection.env', env_vars=["DATABASE", "USER", "PASSWORD"])

    @property
    def connection_string(self):
        print(f"mongodb://{self.settings.mongo_user}:{self.settings.mongo_password}@localhost:27017/{self.settings.mongo_database}")
        return f"mongodb://{self.settings.mongo_user}:{self.settings.mongo_password}@localhost:27017/{self.settings.mongo_database}"

class MongoDBClient:
    def __init__(self):
        self.client = AsyncIOMotorClient(MongoDBSettings().connection_string)
        self.db = self.client[MongoDBSettings().settings.mongo_database]

    async def get_collection(self, collection_name):
        return self.db[collection_name]


async def save_currency_rates(currencies_list):
    """Сохраняет курсы валют в базу данных MongoDB."""
    # Удаляем старые данные
    mongo_client = MongoDBClient()
    await mongo_client.get_collection("currencies").drop()

    # Вставляем новые данные
    for currency in currencies_list:
        await mongo_client.get_collection("currencies").insert_one({
            "quotecurrency": currency.quotecurrency,
            "mid": currency.mid
        })
    await mongo_client.get_collection("currencies").delete_many({})

    # Вставляем новые данные
    for currency in currencies_list:
        await mongo_client.get_collection("currencies").insert_one({
            "quotecurrency": currency.quotecurrency,
            "mid": currency.mid
        })

# import asyncio
#
# async def fetch_currencies():
#     mongo_client = MongoDBClient()
#     collection = await mongo_client.get_collection("currencies")
#
#     # Запрос всех документов из коллекции
#     currencies = await collection.find().to_list(length=None)
#
#     for currency in currencies:
#         print(currency)
#
#
# # Запуск асинхронной функции
# if __name__ == "__main__":
#     asyncio.run(fetch_currencies())