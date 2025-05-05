from fastapi import HTTPException

from loguru import logger

from src.settings import get_settings
from src.extractors.currencies_extractor import save_thb_rates
from src.utils.currency_service import fetch_all_thb

xe_settings = get_settings(
    filename='credentials.env',
    env_vars=[
        "ACCOUNT_ID",
        "ACCOUNT_KEY",
        "EXCHANGE_TO_RATE_REQUEST",
        "EXCHANGE_FROM_RATE_REQUEST",
        "GET_TETHER_TO_RUB_AND_THB"
    ]
)

open_api_settings = get_settings(
    filename='credentials.env',
    env_vars=[
            "GET_ALL_THB_RATES",
            "GET_TETHER_TO_RUB_AND_THB"
        ]
)

async def scheduled_thb_exchange_rate():
    """
    Запланированное выполнение функции для получения текущего обменного курса валют.
    """
    logger.info("Scheduled task: fetching currency exchange rates.")
    await get_thb_exchange_rates()

async def get_thb_exchange_rates():
    """
        Получает текущий обменный курс валют.

        Returns:
            A JSON response with the currency exchange rates.
        """
    try:
        all_thb_rates, tether_rate = await fetch_all_thb(open_api_settings)

        # Создание DataFrame из данных и их слияние
        await save_thb_rates(all_rates=all_thb_rates, tether=tether_rate)

    except Exception as e:
        logger.exception("An unexpected error occurred")
        raise HTTPException(status_code=500,
                            detail=f"An unexpected error occurred. {e}")