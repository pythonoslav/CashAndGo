import os
from dotenv import load_dotenv

class ConfigError(Exception):
    """Custom exception for configuration errors."""
    pass

class Settings:
    """Class to manage application settings."""

    def __init__(self, env_file: str, env_vars: list[str]):
        self.env_file = env_file
        self.env_vars = env_vars
        self._load_env()

    def _load_env(self):
        """Load environment variables from a .env file."""
        if not os.path.exists(self.env_file):
            raise ConfigError(f"Environment file not found: {self.env_file}")
        load_dotenv(dotenv_path=self.env_file)
        self._validate_settings()

    def _validate_settings(self):
        """Ensure all required settings are loaded."""
        required_vars = self.env_vars
        missing_vars = [var for var in required_vars if os.getenv(var) is None]

        if missing_vars:
            raise ConfigError(f"Missing required environment variables: {', '.join(missing_vars)}")

    @property
    def account_id(self):
        return os.getenv("ACCOUNT_ID")

    @property
    def api_key(self):
        return os.getenv("ACCOUNT_KEY")

    @property
    def exchange_to_rate_request(self):
        return (os.getenv("EXCHANGE_TO_RATE_REQUEST"))

    @property
    def exchange_from_rate_request(self):
        return os.getenv("EXCHANGE_FROM_RATE_REQUEST")

    @property
    def mongo_database(self):
        return os.getenv("DB_NAME")

    @property
    def mongo_user(self):
        return os.getenv("DB_USERNAME")

    @property
    def mongo_password(self):
        return os.getenv("DB_USER_PASSWORD")

def get_settings(filename: str, env_vars: list[str]) -> Settings:
    """Get the application settings."""
    current_directory = os.path.dirname(__file__)
    env_file_path = os.path.join(current_directory, '..', 'data', filename)
    return Settings(env_file=env_file_path, env_vars=env_vars)
