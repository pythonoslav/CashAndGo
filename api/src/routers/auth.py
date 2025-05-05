from fastapi import APIRouter, HTTPException, Request

from src.models.request_schemas import LoginSchema

auth_router = APIRouter(
    prefix="/auth"
)

@auth_router.post("/login")
async def login(data: LoginSchema, request: Request):
    ...