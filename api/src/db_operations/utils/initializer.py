from loguru import logger
from motor.motor_asyncio import AsyncIOMotorDatabase
from passlib.hash import bcrypt


class DBInitializer:
    def __init__(self, db: AsyncIOMotorDatabase):
        self.db = db

    async def init_collections(self, names: list[str]):
        existing = await self.db.list_collection_names()
        for name in names:
            if name not in existing:
                await self.db.create_collection(name)
                logger.info(f"Collection '{name}' created.")
            else:
                logger.info(f"Collection '{name}' already exists.")

    async def ensure_admin_user(self, login: str, password: str):
        users = self.db["users"]
        existing = await users.find_one({"login": login})
        if existing:
            logger.info("Administrator user already exist")
            return

        hashed = bcrypt.hash(password)
        await users.insert_one({"login": login, "password": hashed})
        logger.success(f"Administrator '{login}' has been added.")
