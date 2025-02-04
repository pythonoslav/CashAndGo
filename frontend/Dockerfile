# Этап 1: Сборка React-приложения
FROM node:20-alpine AS build

WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . . 
RUN npm run build

# Этап 2: Контейнер для раздачи файлов
FROM alpine:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /frontend/build/ /usr/share/nginx/html/
