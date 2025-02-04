# Этап 1: Сборка React-приложения
FROM node:20-alpine AS build

WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . . 
RUN npm run build

# Этап 2: Раздача фронта через `serve`
FROM node:20-alpine
WORKDIR /frontend
RUN npm install -g serve

COPY --from=build /frontend/build /frontend/build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
