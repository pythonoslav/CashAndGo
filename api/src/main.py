from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routers.currencies import currencies_router
from src.routers.auth import auth_router
from src.routers.rates import rates


app = FastAPI(root_path="/api")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://cashandgo.exchange"],  # добавить все нужные адреса!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(currencies_router)
app.include_router(auth_router)
app.include_router(rates)




