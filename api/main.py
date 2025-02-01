import math
from fastapi import FastAPI, HTTPException
from loguru import logger
from settings.mongo_config import MongoDBClient
from apscheduler.schedulers.asyncio import AsyncIOScheduler

from settings.config import get_settings
from utils.scheduler_service import scheduled_currency_exchange_rate

# Создание приложения FastAPI
app = FastAPI()
# Получение настроек
api_settings = get_settings(
    filename='credentials.env',
    env_vars=["ACCOUNT_ID", "ACCOUNT_KEY", "EXCHANGE_TO_RATE_REQUEST", "EXCHANGE_FROM_RATE_REQUEST"]
)

scheduler = AsyncIOScheduler()

@app.on_event("startup")
async def start_scheduler():
    """
    Функция запускается при старте приложения.
    Запускает планировщик задач.
    """
    scheduler.add_job(scheduled_currency_exchange_rate, 'interval', minutes=30)  # Запускать каждые 30 минут
    scheduler.start()


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

        logger.debug(f"Exchange rates: {exchange_rates}")

        # Преобразуем данные для удобного формата
        formatted_rates = [
            {
                "quotecurrency": rate["quotecurrency"],
                "mid_to": rate["mid_to"] if not (math.isinf(rate["mid_to"]) or math.isnan(rate["mid_to"])) else None,
                "mid_from": rate["mid_from"] if not (math.isinf(rate["mid_from"]) or math.isnan(rate["mid_from"])) else None
            }
            for rate in exchange_rates
        ]

        return {
            "is_error": False,
            "result": formatted_rates,
        }  # Возвращаем только список объектов

    except Exception as e:
        logger.exception(f"An unexpected error occurred while fetching currency data. {e}")
        raise HTTPException(status_code=500, detail=f"Failed to fetch currency data. {e}")


@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    logger.error(f"HTTP Exception: {exc.detail}")
    return await request.app.default_exception_handler(request, exc)
