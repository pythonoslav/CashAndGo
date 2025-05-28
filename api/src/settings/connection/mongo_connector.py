from src.settings.config import get_settings

class MongoDBSettings:
    def __init__(self):
        self.settings = get_settings(filename='mongoconnection.env', base_path="/api/data")

    @property
    def connection_string(self):
        return f"mongodb://{self.settings.mongo_user}:{self.settings.mongo_password}@mongo_db:27017/"