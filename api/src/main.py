from fastapi import FastAPI

from src.routers.currencies import currencies_router
from src.routers.auth import auth_router
from src.routers.rates import rates


app = FastAPI(root_path="/api")

app.include_router(currencies_router)
app.include_router(auth_router)
app.include_router(rates)




