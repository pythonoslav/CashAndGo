FROM nginx:alpine

# Удаляем дефолтные файлы
RUN rm -rf /usr/share/nginx/html/*

# Копируем билд фронта из локальной папки
COPY ../frontend/build/ /usr/share/nginx/html/

# Копируем конфиг Nginx
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
