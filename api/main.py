from fastapi import FastAPI

app = FastAPI()

@app.get("/currency_exchange_rate")
async def get_currency_exchange_rate():
    ...