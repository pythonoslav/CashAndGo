import os
from dotenv import load_dotenv

class ConfigError(Exception):
    """Custom exception for configuration errors."""
    pass

class Settings:
    """Class to manage application settings."""

    _instance = None  # Singleton instance

    def __new__(cls, env_file: str, env_vars: list[str]):
        if cls._instance is None:
            cls._instance = super(Settings, cls).__new__(cls)
            cls._instance._init(env_file, env_vars)
        return cls._instance

    def _init(self, env_file: str, env_vars: list[str]):
        self.env_file = env_file
        self.env_vars = env_vars
        self._load_env()

    def _load_env(self):
        """Load environment variables from a .env file."""
        if not os.path.exists(self.env_file):
            print(f"Warning: Environment file not found: {self.env_file}")
        else:
            load_dotenv(dotenv_path=self.env_file)

        self._validate_settings()

    def _validate_settings(self):
        """Ensure all required settings are loaded."""
        missing_vars = [var for var in self.env_vars if os.getenv(var) is None]

        if missing_vars:
            print(f"Warning: Missing environment variables: {', '.join(missing_vars)}")
            for var in missing_vars:
                os.environ[var] = ""  # Устанавливаем пустое значение, чтобы избежать ошибок

    def _get_env(self, var_name, default=None):
        """Get an environment variable with a default value."""
        return os.getenv(var_name, default)

    @property
    def account_id(self):
        return self._get_env("ACCOUNT_ID")

    @property
    def api_key(self):
        return self._get_env("API_KEY", "e94bd4d653c6149c7af98fe1")

    @property
    def exchange_to_rate_request(self):
        return self._get_env("EXCHANGE_TO_RATE_REQUEST")

    @property
    def exchange_from_rate_request(self):
        return self._get_env("EXCHANGE_FROM_RATE_REQUEST")

    @property
    def all_thb(self):
        return self._get_env("GET_ALL_THB_RATES")

    @property
    def tether_exchange_rates(self):
        return self._get_env("GET_TETHER_TO_RUB_AND_THB")

    @property
    def mongo_database(self):
        return self._get_env("DB_NAME", "CashAndGoDB")

    @property
    def mongo_user(self):
        return self._get_env("DB_USERNAME", "CashAndGo")

    @property
    def mongo_password(self):
        return self._get_env("DB_USER_PASSWORD", "2093100Tbm")


def get_settings(filename: str, env_vars: list[str]) -> Settings:
    """Get the application settings (Singleton)."""
    current_directory = os.path.dirname(__file__)
    env_file_path = os.path.join(current_directory, '..', 'data', filename)
    return Settings(env_file=env_file_path, env_vars=env_vars)
