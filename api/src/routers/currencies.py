from fastapi import APIRouter, HTTPException, Request
from loguru import logger

from apscheduler.schedulers.asyncio import AsyncIOScheduler

from src.utils.scheduler_service import scheduled_thb_exchange_rate
from src.utils.currency_service import load_flags_data
from src.db_operations.extractors.currencies_extractor import currencies_extr

scheduler = AsyncIOScheduler()

currencies_router = APIRouter(
    prefix="/currencies"
)

@currencies_router.on_event("startup")
async def start_scheduler():
    """
    Функция запускается при старте приложения.
    Запускает планировщик задач.
    """

    await scheduled_thb_exchange_rate()

    scheduler.add_job(scheduled_thb_exchange_rate, 'interval', minutes=30)  # Запускать каждые 30 минут
    if not scheduler.running:
        scheduler.start()

    await load_flags_data()

@currencies_router.get('/get_currencies_data')
async def get_currencies_data(request: Request):
    """
        Получает данные валют из коллекции exchange_rates.

        Returns:
            A JSON response with currency data.
    """

    request_body = await request.body()
    logger.debug(f"request body: {request_body}")

    try:
        result = await currencies_extr()
        return result

    except Exception as e:
        logger.exception(f"An unexpected error occurred while fetching currency data. {e}")
        raise HTTPException(status_code=500, detail=f"Failed to fetch currency data. {e}")