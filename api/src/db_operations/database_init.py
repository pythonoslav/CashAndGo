import asyncio
from loguru import logger

from src.settings.client import MongoDBClient
from src.db_operations.utils.checker import MongoWaiter
from src.db_operations.utils.initializer import DBInitializer
from src.db_operations.utils.default_coefficient_initialization import init_ticker_modifiers
from src.settings.config import get_settings

async def main():
    logger.info("Start database initialization")

    # Загружаем настройки из .env файла
    settings = get_settings(filename=".env.secrets", base_path="/api/data")
    admin_login = settings.admin_login
    admin_password = settings.admin_password

    async with MongoDBClient() as client:
        await MongoWaiter(client).wait()

        initializer = DBInitializer(client.db)
        await initializer.init_collections(["users", "tokens"])
        await initializer.ensure_admin_user(login=admin_login, password=admin_password)
        await init_ticker_modifiers()

    logger.success("Initialization complete successfully")

if __name__ == "__main__":
    asyncio.run(main())
