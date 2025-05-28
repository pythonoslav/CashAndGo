FROM python:3.11-slim

WORKDIR /api
ENV PYTHONPATH=/api

RUN apt-get update \
 && apt-get install -y --no-install-recommends libpq-dev gcc \
 && rm -rf /var/lib/apt/lists/*

# Сначала requirements.txt — кешируем слои
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Копируем весь проект
COPY . .

# Копируем entrypoint-скрипт и делаем его исполняемым
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Устанавливаем часовой пояс (важно до смены пользователя!)
ENV TZ=Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Создаем непривилегированного пользователя
RUN addgroup --system app && adduser --system --ingroup app app
USER app

ENV PYTHONUNBUFFERED=1

EXPOSE 5000

# ENTRYPOINT и CMD
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD []
