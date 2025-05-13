from fastapi import Request, HTTPException
from src.utils.jwt_handler import decode_token

async def get_current_user(request: Request) -> dict:
    auth_header = request.headers.get("Authorization")

    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Токен доступа отсутствует или некорректен")

    token = auth_header.split(" ")[1]
    decoded = decode_token(token, access=True, refresh=False, return_data=True)

    if not decoded:
        raise HTTPException(status_code=401, detail="Невалидный токен")

    return decoded
