# Этап 1: Сборка React-приложения
FROM node:20-alpine AS build

WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . . 
RUN npm run build

# Этап 2: Запуск с Nginx
FROM nginx:alpine

# Копируем билд React в директорию Nginx
COPY --from=build /frontend/build /usr/share/nginx/html

# Копируем кастомный Nginx конфиг (опционально)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порты (но в Docker Compose они задаются отдельно)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
