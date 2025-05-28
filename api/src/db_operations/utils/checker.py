from pymongo.errors import ServerSelectionTimeoutError, ConnectionFailure
import asyncio
from loguru import logger

class MongoWaiter:
    def __init__(self, client, retries=30, delay=1):
        self.client = client
        self.retries = retries
        self.delay = delay

    async def wait(self):
        for attempt in range(1, self.retries + 1):
            try:
                await self.client.db.command("ping")
                logger.info("MongoDB available.")
                return
            except (ServerSelectionTimeoutError, ConnectionFailure) as e:
                logger.warning(f"Trying {attempt}/{self.retries} — MongoDB unavailable: {e}")
            except Exception as e:
                logger.error(f"Exception while ping MongoDB: {e}")
            await asyncio.sleep(self.delay)

        raise RuntimeError("Mongo unavailable after all tries.")
