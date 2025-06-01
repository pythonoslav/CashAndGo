# Сборка приложения
FROM node:20-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build && ls -la /app/dist && cat /app/dist/index.html

# Финальный образ для запуска
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app/dist ./dist
RUN ls -la /app/dist && cat /app/dist/index.html
RUN npm install -g serve
EXPOSE 3002
CMD ["serve", "-s", "dist", "-l", "tcp://0.0.0.0:3002", "--verbose"]