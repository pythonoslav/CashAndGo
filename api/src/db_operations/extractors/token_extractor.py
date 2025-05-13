from src.settings.client import MongoDBClient

async def get_refresh_token_record(login: str, user_agent: str):
    async with MongoDBClient() as client:
        collection = await client.get_collection("tokens")
        return await collection.find_one({"login": login, "user_agent": user_agent})
