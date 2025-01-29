from fastapi import FastAPI, HTTPException
import httpx
from loguru import logger
from models.response_models import XeCurrencyConvertedListResponseModel
from models.config import get_settings


# Создание приложения FastAPI
app = FastAPI()
# Получение настроек
settings = get_settings()


@app.get("/currency_exchange_rate")
async def get_currency_exchange_rate():
    """
    Получает текущий обменный курс валют.

    Returns:
        A JSON response with the currency exchange rates.
    """
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(
                settings.exchange_rate_request,
                auth=(settings.account_id, settings.api_key)
            )

        response.raise_for_status()  # Проверяем успешность ответа

        response_data = XeCurrencyConvertedListResponseModel(**response.json())

        return {
            "is_error": False,
            "result": response_data.currencies_list
        }

    except httpx.HTTPStatusError as e:
        logger.error(f"HTTP error: {e.response.status_code} - {e.response.text}")
        raise HTTPException(status_code=e.response.status_code,
                            detail="Failed to fetch currency exchange rate.")

    except Exception as e:
        logger.exception("An unexpected error occurred")
        raise HTTPException(status_code=500,
                            detail="An unexpected error occurred.")

# # Функция для запуска приложения
# if __name__ == '__main__':
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=8000)
