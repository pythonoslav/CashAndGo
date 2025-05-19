import os
from pathlib import Path
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
        """
        Load environment variables from a .env file.
        Если переменная уже есть в окружении (например, через docker-compose),
        она НЕ будет перезаписана!
        """
        if os.path.exists(self.env_file):
            load_dotenv(dotenv_path=self.env_file, override=False)
        else:
            print(f"Warning: Environment file not found: {self.env_file}")

        self._validate_settings()

    def _validate_settings(self):
        """Ensure all required settings are loaded."""
        missing_vars = [var for var in self.env_vars if os.getenv(var) is None]

        if missing_vars:
            print(f"Warning: Missing environment variables: {', '.join(missing_vars)}")
            # Не устанавливаем пустые значения, чтобы не маскировать проблемы!

    def _get_env(self, var_name, default=None):
        """Get an environment variable with a default value."""
        return os.getenv(var_name, default)

    # === Properties ===
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

    @property
    def admin_login(self):
        return self._get_env("ADMIN_LOGIN", "6e6r4")

    @property
    def admin_password(self):
        return self._get_env("ADMIN_PASSWORD", "!Be6r0Nyh0v2281488!$o$pi$o$ZlpT0kEH!!AAA")

    @property
    def jwt_access(self):
        return self._get_env("JWT_ACCESS_KEY")

    @property
    def jwt_refresh(self):
        return self._get_env("JWT_REFRESH_KEY")

    @property
    def jwt_algorithm(self):
        return self._get_env("JWT_ALGORITHM", "HS256")

    @property
    def access_token_expire_minutes(self):
        return int(self._get_env("ACCESS_TOKEN_EXPIRE_MINUTES", 15))

    @property
    def refresh_token_expire_days(self):
        return int(self._get_env("REFRESH_TOKEN_EXPIRE_DAYS", 7))


def get_settings(filename: str = ".env", base_path: str = "") -> Settings:
    base_dir = Path(__file__).resolve().parent
    env_path = base_dir / base_path / filename

    try:
        with open(env_path, 'r') as file:
            var_names = [
                line.strip().split('=')[0]
                for line in file if line.strip() and not line.startswith('#')
            ]
    except FileNotFoundError:
        print(f"Файл .env не найден по пути: {env_path}")
        var_names = []

    # Передаём путь к env (может не существовать — не страшно)
    return Settings(env_file=str(env_path), env_vars=var_names)
