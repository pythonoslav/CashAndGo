#!/usr/bin/env sh
set -e

export PYTHONPATH=/api
python -m src.db_operations.database_init
exec uvicorn src.main:app --host 0.0.0.0 --port 5000 --ssl-keyfile /api/certs/tls.key --ssl-certfile /api/certs/tls.crt
