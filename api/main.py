from fastapi import FastAPI, HTTPException, Request
from loguru import logger
from settings.mongo_config import MongoDBClient
from apscheduler.schedulers.asyncio import AsyncIOScheduler

from utils.scheduler_service import scheduled_thb_exchange_rate
from utils.currency_service import load_flags_data

# Создание приложения FastAPI
app = FastAPI(root_path="/api")
# Получение настроек

scheduler = AsyncIOScheduler()


@app.on_event("startup")
async def start_scheduler():
    """
    Функция запускается при старте приложения.
    Запускает планировщик задач.
    """

    scheduler.add_job(scheduled_thb_exchange_rate, 'interval', minutes=3)  # Запускать каждые 30 минут
    scheduler.start()

    await load_flags_data()



@app.get('/get_currencies_data')
async def get_currencies_data(request: Request):
    request_body = await request.body()
    logger.debug(f"request body: {request_body}")
    """
           Получает данные валют из коллекции exchange_rates.

           Returns:
               A JSON response with currency data.
           """
    try:
        mongo_client = MongoDBClient()
        exchange_rates = await mongo_client.get_exchange_rates(collection_name="exchange_rates")
        country_codes_list = await mongo_client.get_exchange_rates(collection_name="country_codes")


        country_codes = {code['quotecurrency']: code['country-code'] for code in country_codes_list["flags"]}

        # Преобразуем данные для удобного формата
        formatted_rates = [
            {
                "country_code": country_codes.get(rate["quotecurrency"], "Unknown"),
                "code": rate["quotecurrency"],
                "buy": rate["buy"] if rate["buy"] else 0,
                "sell": rate["sell"] if rate["sell"] else 0
            }
            for rate in exchange_rates["rates"]
        ] if exchange_rates else []
        print(formatted_rates)

        return {
            "is_error": False,
            "result": formatted_rates,
            "updated": exchange_rates["updated"] if exchange_rates else "Not updated yet"
        }  # Возвращаем только список объектов

    except Exception as e:
        logger.exception(f"An unexpected error occurred while fetching currency data. {e}")
        raise HTTPException(status_code=500, detail=f"Failed to fetch currency data. {e}")
