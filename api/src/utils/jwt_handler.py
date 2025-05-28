from jose import JWTError, jwt
from datetime import datetime, timedelta, timezone
from typing import Optional

from src.settings.config import get_settings

settings = get_settings(filename=".env.secrets", base_path="../../data")

# Ключи и параметры
ACCESS_SECRET = settings.jwt_access
REFRESH_SECRET = settings.jwt_refresh
ALGORITHM = settings.jwt_algorithm

ACCESS_EXPIRE_MINUTES = settings.access_token_expire_minutes
REFRESH_EXPIRE_DAYS = settings.refresh_token_expire_days

print("ACCESS_SECRET:", repr(ACCESS_SECRET))
print("REFRESH_SECRET:", repr(REFRESH_SECRET))
print("ALGORITHM:", repr(ALGORITHM))

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (expires_delta or timedelta(minutes=ACCESS_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, ACCESS_SECRET, algorithm=ALGORITHM)

def create_refresh_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (expires_delta or timedelta(days=REFRESH_EXPIRE_DAYS))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, REFRESH_SECRET, algorithm=ALGORITHM)

def decode_token(token: str, access: bool = False, refresh: bool = False, return_data: bool = False):
    try:
        secret = ACCESS_SECRET if access else REFRESH_SECRET
        payload = jwt.decode(token, secret, algorithms=[ALGORITHM])
        return payload if return_data else True
    except JWTError:
        return False
