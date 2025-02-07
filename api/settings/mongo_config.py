import pandas as pd

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
        collection = await self.get_collection(collection_name=collection_name)  # Получаем нужную коллекцию
        return await collection.find().to_list(length=None)


# async def save_currency_rates(currencies_list: list):
#     """Сохраняет курсы валют в базу данных MongoDB."""
#     mongo_client = MongoDBClient()
#     collection = await mongo_client.get_collection("exchange_rates")
#
#     # Удаляем старые данные (если это необходимо)
#     await collection.delete_many({})  # Удаляет все документы в коллекции
#
#     # Подготовка данных для вставки
#     documents = [
#         {
#             "quotecurrency": currency['quotecurrency'],
#             "mid_to": currency['mid_to'] if not pd.isna(currency['mid_to']) else 0,  # Заменяем NaN на 0
#             "mid_from": currency['mid_from'] if not pd.isna(currency['mid_from']) else 0
#         }
#         for currency in currencies_list
#     ]
#
#     # Вставка документов в коллекцию
#     if documents:
#         await collection.insert_many(documents)

# async def save_currency_rates(currencies_list: list):
#     """Сохраняет курсы валют в базу данных MongoDB."""
#     mongo_client = MongoDBClient()
#     collection = await mongo_client.get_collection("exchange_rates")
#
#     # Удаляем старые данные (если это необходимо)
#     await collection.delete_many({})  # Удаляет все документы в коллекции
#
#     # Подготовка данных для вставки
#     documents = []
#     buy_THB_RUB = None
#     buy_THB_USD = None
#
#     # Перебираем все валюты в списке
#     for currency in currencies_list:
#         # Сохраняем курсы покупки и продажи
#         mid_to = currency['mid_to'] if not pd.isna(currency['mid_to']) else 0  # Цена продажи
#         mid_from = currency['mid_from'] if not pd.isna(currency['mid_from']) else 0  # Цена покупки
#
#         documents.append({
#             "quotecurrency": currency['quotecurrency'],
#             "mid_to": mid_to,
#             "mid_from": mid_from
#         })
#
#         # Сохраняем курсы тайского бата к рублю и доллару
#         if currency['quotecurrency'] == 'THB/RUB':
#             buy_THB_RUB = mid_from  # Цена покупки THB к RUB
#         elif currency['quotecurrency'] == 'THB/USD':
#             buy_THB_USD = mid_from  # Цена покупки THB к USD
#
#     # Проверяем, что оба курса были найдены
#     if buy_THB_RUB is not None and buy_THB_USD is not None:
#         # Рассчитываем курс доллара к рублю и к бату
#         usd_to_rub = buy_THB_RUB / buy_THB_USD  # USD/RUB
#         usd_to_thb = 1 / buy_THB_USD  # USD/THB
#
#         # Рассчитываем курс RUB
#         rub_value = (usd_to_rub / usd_to_thb) * 3
#
#         # Ищем объект с "quotecurrency": "RUB" для прибавления значения
#         for currency in documents:
#             if currency['quotecurrency'] == 'RUB':
#                 # Создаем новый объект с "RUB(нал)"
#                 documents.append({
#                     "quotecurrency": "RUB(нал)",
#                     "mid_to": currency['mid_to'] + rub_value,  # Прибавляем rub_value
#                     "mid_from": currency['mid_from'] + rub_value  # Прибавляем rub_value
#                 })
#                 break  # Найдено, можем выйти из цикла
#
#     # Вставка документов в коллекцию
#     if documents:
#         await collection.insert_many(documents)

async def save_currency_rates(currencies_list: list):
    """Сохраняет курсы валют в базу данных MongoDB."""
    mongo_client = MongoDBClient()
    collection = await mongo_client.get_collection("exchange_rates")

    # Удаляем старые данные (если это необходимо)
    await collection.delete_many({})  # Удаляет все документы в коллекции

    # Находим курсы THB/USD и THB/RUB
    thb_usd = next((item for item in currencies_list if item['quotecurrency'] == 'USD'), None)
    thb_rub = next((item for item in currencies_list if item['quotecurrency'] == 'RUB'), None)

    if thb_usd and thb_rub:
        # Вычисляем курс USD/RUB
        usd_rub_buy = thb_rub['mid_from'] / thb_usd['mid_to']  # mid_from для RUB, mid_to для USD
        usd_rub_sell = thb_rub['mid_to'] / thb_usd['mid_from']  # mid_to для RUB, mid_from для USD

        # Вычисляем курс USD/THB
        usd_thb_buy = 1 / thb_usd['mid_to']  # mid_to для USD
        usd_thb_sell = 1 / thb_usd['mid_from']  # mid_from для USD

        # Вычисляем итоговый курс RUB по формуле
        rub_buy = (usd_rub_buy / usd_thb_sell) * 3
        rub_sell = (usd_rub_sell / usd_thb_buy) * 3

        # Создаем новый объект с "quotecurrency": "RUB(nal)"
        rub_nal_object = {
            "quotecurrency": "RUB(nal)",
            "mid_to": thb_rub['mid_to'] + rub_sell,  # Прибавляем rub_sell к mid_to
            "mid_from": thb_rub['mid_from'] + rub_buy  # Прибавляем rub_buy к mid_from
        }
    else:
        # Если курсы THB/USD или THB/RUB не найдены, создаем объект с нулевыми значениями
        rub_nal_object = {
            "quotecurrency": "RUB(nal)",
            "mid_to": 0,
            "mid_from": 0
        }

    # Подготовка данных для вставки
    documents = [
        {
            "quotecurrency": currency['quotecurrency'],
            "mid_to": currency['mid_to'] if not pd.isna(currency['mid_to']) else 0,  # Заменяем NaN на 0
            "mid_from": currency['mid_from'] if not pd.isna(currency['mid_from']) else 0
        }
        for currency in currencies_list
    ]

    # Добавляем новый объект с "quotecurrency": "RUB(нал)" в documents
    documents.append(rub_nal_object)

    # Вставка документов в коллекцию
    if documents:
        await collection.insert_many(documents)