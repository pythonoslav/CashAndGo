from datetime import datetime, timezone
from src.settings.client import MongoDBClient

async def save_refresh_token(login: str, token: str, user_agent: str):
    async with MongoDBClient() as client:
        tokens = await client.get_collection("tokens")
        await tokens.update_one(
            {"login": login, "user_agent": user_agent},
            {
                "$set": {
                    "token": token,
                    "created_at": datetime.now(timezone.utc)
                }
            },
            upsert=True
        )
