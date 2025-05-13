from src.settings.client import MongoDBClient

async def get_user_by_login(login: str):
    async with MongoDBClient() as client:
        users = await client.get_collection("users")
        return await users.find_one({"login": login})
