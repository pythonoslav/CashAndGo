FROM python:3.11-slim

WORKDIR /api

# Install necessary dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev gcc \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code and certificates
COPY . .

# Copy TLS certificates into the container
COPY certs/tls.crt /etc/ssl/certs/tls.crt
COPY certs/tls.key /etc/ssl/private/tls.key
# Set environment variable
ENV PYTHONUNBUFFERED=1

# Expose the port
EXPOSE 8000

# Start the application with SSL
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--ssl-keyfile", "/etc/ssl/private/tls.key", "--ssl-certfile", "/etc/ssl/certs/tls.crt"]