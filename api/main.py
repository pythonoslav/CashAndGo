from fastapi import FastAPI, HTTPException
from loguru import logger
from settings.mongo_config import MongoDBClient

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
    """
           Получает данные валют из коллекции exchange_rates.

           Returns:
               A JSON response with currency data.
           """
    try:
        mongo_client = MongoDBClient()
        exchange_rates = await mongo_client.get_exchange_rates()

        # Преобразуем данные для удобного формата
        formatted_rates = [
            {
                "quotecurrency": rate["quotecurrency"],
                "mid_to": rate["mid_to"],
                "mid_from": rate["mid_from"]
            }
            for rate in exchange_rates
        ]

        return formatted_rates  # Возвращаем только список объектов

    except Exception as e:
        logger.exception(f"An unexpected error occurred while fetching currency data. {e}")
        raise HTTPException(status_code=500, detail=f"Failed to fetch currency data. {e}")


@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    logger.error(f"HTTP Exception: {exc.detail}")
    return await request.app.default_exception_handler(request, exc)
