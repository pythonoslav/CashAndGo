"""Exceptions for config.py"""
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

class ConfigError(Exception):
    """Custom exception for configuration errors."""
    pass

class EnvFileNotFoundError(ConfigError):
    """Raised when the configuration file is not found."""
    pass

class EnvAttributeNotFoundError(ConfigError):
    pass
