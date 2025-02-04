# 1. Сборка React-приложения
FROM node:20-alpine AS build

WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# 2. Используем Nginx для раздачи фронта
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /frontend/build/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]