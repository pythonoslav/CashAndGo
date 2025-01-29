import os
import asyncio

import dotenv
from fastapi import FastAPI
from fastapi.responses import JSONResponse
import httpx
from loguru import logger

from models.response_models import XeCurrencyConvertedListResponseModel

app = FastAPI()

dotenv.load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), "credentials.env"))

account_id = os.getenv("ACCOUNT_ID")
api_key = os.getenv("ACCOUNT_KEY")
url = os.getenv("EXCHANGE_RATE_REQUEST")

@app.get("/currency_exchange_rate")
async def get_currency_exchange_rate():
    try:

        async with httpx.AsyncClient() as client:
            response = await client.get(
                url,
                auth=(account_id, api_key)
            )

        response.raise_for_status()  # Проверяем успешность ответа

        response_data = XeCurrencyConvertedListResponseModel(**response.json())

        return {
            "is_error": False,
            "result": response_data.currencies_list
        }


    except httpx.HTTPStatusError as e:
        logger.error(f"HTTP error occurred: {e.response.status_code} - {e.response.text}")
        return JSONResponse(
            content={
                "isError": True,
                "message": "Failed to fetch currency exchange rate."
            },
            status_code=e.response.status_code
        )

    except Exception as e:
        logger.error(f"An unexpected error occurred: {str(e)}")
        return JSONResponse(
            content={
                "isError": True,
                "message": "An unexpected error occurred."
            },
            status_code=500
        )
