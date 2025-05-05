from fastapi import FastAPI

from src.routers.currencies import currencies_router


app = FastAPI(root_path="/api")

app.include_router(currencies_router)




