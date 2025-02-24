import os
import json

import httpx
from loguru import logger
from fastapi import HTTPException
import pandas as pd

from models.response_models import XeCurrencyConvertedToListResponseModel, XeCurrencyConvertedFromListResponseModel
from settings.mongo_config import MongoDBClient

async def fetch_all_thb(api_settings):
    async with httpx.AsyncClient() as client:
        try:
            thb_convert = await client.get(
                api_settings.all_thb
            )

            response_tether = await client.get(
                api_settings.tether_exchange_rates,
            )

            thb_convert.raise_for_status()
            response_tether.raise_for_status()

            data_thb_convert = thb_convert.json().get("conversion_rates", {})
            tether_rate = response_tether.json()

            return data_thb_convert, tether_rate

        except httpx.HTTPStatusError as e:
            logger.error(f"HTTP error: {e.response.status_code} - {e.response.text}")
            raise HTTPException(status_code=e.response.status_code,
                                detail="Failed to fetch currency exchange rate.")

async def fetch_currency_data(api_settings):
    """
    Fetches currency data from the external API.

    Args:
        api_settings: The settings configuration for API requests.

    Returns:
        Tuple containing currency conversion data.

    Raises:
        HTTPException: If the API requests fail.
    """
    async with httpx.AsyncClient() as client:
        try:
            response_convert_to = await client.get(
                api_settings.exchange_to_rate_request,
                auth=(api_settings.account_id, api_settings.api_key)
            )
            response_convert_from = await client.get(
                api_settings.exchange_from_rate_request,
                auth=(api_settings.account_id, api_settings.api_key)
            )
            response_tether = await client.get(
                api_settings.tether_exchange_rates,
            )

            response_convert_to.raise_for_status()
            response_convert_from.raise_for_status()
            response_tether.raise_for_status()

            data_convert_to = XeCurrencyConvertedToListResponseModel(**response_convert_to.json())
            data_convert_from = XeCurrencyConvertedFromListResponseModel(**response_convert_from.json())
            tether_rate = response_tether.json()

            return data_convert_to, data_convert_from, tether_rate

        except httpx.HTTPStatusError as e:
            logger.error(f"HTTP error: {e.response.status_code} - {e.response.text}")
            raise HTTPException(status_code=e.response.status_code,
                                detail="Failed to fetch currency exchange rate.")

def merge_currency_data(data_convert_to, data_convert_from):
    """
    Объединяет данные валют с использованием pandas.

    Args:
        data_convert_to: Данные по обменному курсу TO.
        data_convert_from: Данные по обменному курсу FROM.

    Returns:
        Объединенный список обменных курсов.
    """
    df_to = pd.DataFrame(data_convert_to.currencies_list)
    df_from = pd.DataFrame(data_convert_from.to)

    merged_df = pd.merge(df_to, df_from, on='quotecurrency',
                         how='outer', suffixes=('_to', '_from'))


    return merged_df.to_dict(orient='records')

async def load_flags_data():
    """Загружает данные из файла flags.json и сохраняет их в коллекцию flags_and_codes."""
    mongo_client = MongoDBClient()
    collection = await mongo_client.get_collection("country_codes")

    # Удаляем старые данные (если это необходимо)
    await collection.delete_many({})

    # Проверяем, существует ли коллекция и если нет, создаем ее
    if not await collection.count_documents({}):  # Если коллекция пустая
        # Загружаем данные из файла
        current_dir = os.path.dirname(os.path.abspath(__file__))
        file_path = os.path.join(current_dir, "..", "data", "flags.json")
        with open(file_path, 'r') as file:
            flags_data = {"flags": json.load(file)}

        # Вставляем данные в коллекцию
        if flags_data:
            await collection.insert_one(flags_data)
