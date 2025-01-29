import os
from dotenv import load_dotenv

class ConfigError(Exception):
    """Custom exception for configuration errors."""
    pass

class Settings:
    """Class to manage application settings."""

    def __init__(self, env_file: str):
        self.env_file = env_file
        self._load_env()

    def _load_env(self):
        """Load environment variables from a .env file."""
        if not os.path.exists(self.env_file):
            raise ConfigError(f"Environment file not found: {self.env_file}")
        load_dotenv(dotenv_path=self.env_file)
        self._validate_settings()

    def _validate_settings(self):
        """Ensure all required settings are loaded."""
        required_vars = ["ACCOUNT_ID", "ACCOUNT_KEY", "EXCHANGE_RATE_REQUEST"]
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
    def exchange_rate_request(self):
        return os.getenv("EXCHANGE_RATE_REQUEST")


def get_settings() -> Settings:
    """Get the application settings."""
    current_directory = os.path.dirname(__file__)
    env_file_path = os.path.join(current_directory, '..', 'data', 'credentials.env')
    return Settings(env_file_path)
