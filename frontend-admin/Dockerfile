# Сборка приложения
FROM node:20-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
# Оптимизированная установка с очисткой
RUN npm install --legacy-peer-deps --no-audit --no-fund && npm cache clean --force && rm -rf /tmp/* /var/tmp/*
COPY . .
RUN npm run build && ls -la /app/dist && cat /app/dist/index.html

# Финальный образ для запуска
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app/dist ./admin-panel
RUN ls -la /app/admin-panel && cat /app/admin-panel/index.html
RUN npm install -g serve@latest --no-audit --no-fund && npm cache clean --force && rm -rf /tmp/* /var/tmp/*
EXPOSE 3002
CMD ["serve", "-s", "admin-panel", "-l", "tcp://0.0.0.0:3002", "--no-clipboard"]