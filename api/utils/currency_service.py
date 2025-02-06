import httpx
from loguru import logger
from fastapi import HTTPException
import pandas as pd

from models.response_models import XeCurrencyConvertedToListResponseModel, XeCurrencyConvertedFromListResponseModel

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

            response_convert_to.raise_for_status()
            response_convert_from.raise_for_status()

            data_convert_to = XeCurrencyConvertedToListResponseModel(**response_convert_to.json())
            data_convert_from = XeCurrencyConvertedFromListResponseModel(**response_convert_from.json())

            return data_convert_to, data_convert_from

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