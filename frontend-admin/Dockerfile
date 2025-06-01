# Сборка приложения
FROM node:20-alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей и устанавливаем их
COPY package.json package-lock.json ./
RUN npm install

# Копируем остальной код и собираем проект
COPY . .
RUN npm run build

# Финальный образ для запуска
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только собранные файлы из стадии build
COPY --from=build /app/build ./build

# Устанавливаем serve локально (можно указать конкретную версию, например, serve@14.2.3)
RUN npm install -g serve

# Указываем порт (совпадает с vite.config.js)
EXPOSE 3002

# Запускаем приложение
CMD ["serve", "-s", "build", "-l", "3002"]