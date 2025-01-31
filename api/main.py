from fastapi import FastAPI, HTTPException
import httpx
from loguru import logger
import pandas as pd

from models.response_models import XeCurrencyConvertedToListResponseModel, XeCurrencyConvertedFromListResponseModel
from settings.config import get_settings
from settings.mongo_config import save_currency_rates
from utils.currency_service import fetch_currency_data, merge_currency_data

# Создание приложения FastAPI
app = FastAPI()
# Получение настроек
api_settings = get_settings(
    filename='credentials.env',
    env_vars=["ACCOUNT_ID", "ACCOUNT_KEY", "EXCHANGE_TO_RATE_REQUEST", "EXCHANGE_FROM_RATE_REQUEST"]
)


@app.get("/currency_exchange_rate")
async def get_currency_exchange_rate():
    """
    Получает текущий обменный курс валют.

    Returns:
        A JSON response with the currency exchange rates.
    """
    try:
        data_convert_to, data_convert_from = await fetch_currency_data(api_settings)

        # Создание DataFrame из данных и их слияние
        final_rates_list = merge_currency_data(data_convert_to, data_convert_from)

        await save_currency_rates(final_rates_list)

        return {
            "is_error": False,
            "result": final_rates_list,
        }

    except Exception as e:
        logger.exception("An unexpected error occurred")
        raise HTTPException(status_code=500,
                            detail=f"An unexpected error occurred. {e}")

@app.get('/get_currencies_data')
async def get_currencies_data():
    ...

@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    logger.error(f"HTTP Exception: {exc.detail}")
    return await request.app.default_exception_handler(request, exc)

# # Функция для запуска приложения
# if __name__ == '__main__':
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=8000)


import asyncio

async def test():
    try:
        data_convert_to, data_convert_from = await fetch_currency_data(api_settings)

        # Создание DataFrame из данных и их слияние
        final_rates_list = merge_currency_data(data_convert_to, data_convert_from)

        await save_currency_rates(final_rates_list)

        return {
            "is_error": False,
            "result": final_rates_list,
        }

    except Exception as e:
        logger.exception("An unexpected error occurred")
        raise HTTPException(status_code=500,
                            detail=f"An unexpected error occurred. {e}")

print(asyncio.run(test()))