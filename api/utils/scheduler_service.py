from fastapi import HTTPException

from loguru import logger

from settings.config import get_settings
from settings.mongo_config import save_currency_rates
from utils.currency_service import fetch_currency_data, merge_currency_data

api_settings = get_settings(
    filename='credentials.env',
    env_vars=["ACCOUNT_ID", "ACCOUNT_KEY", "EXCHANGE_TO_RATE_REQUEST", "EXCHANGE_FROM_RATE_REQUEST"]
)

async def scheduled_currency_exchange_rate():
    """
    Запланированное выполнение функции для получения текущего обменного курса валют.
    """
    logger.info("Scheduled task: fetching currency exchange rates.")
    await get_currency_exchange_rate()

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