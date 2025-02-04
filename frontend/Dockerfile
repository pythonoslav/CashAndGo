# Этап 1: Сборка React-приложения
FROM node:20-alpine AS build

WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . . 
RUN npm run build

# Этап 2: Запуск с Nginx
FROM nginx:alpine

# Удаляем дефолтные файлы
RUN rm -rf /usr/share/nginx/html/*

# Копируем собранный React-фронтенд
COPY --from=build /frontend/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
