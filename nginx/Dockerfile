FROM nginx:alpine

# Удаляем дефолтные файлы
RUN rm -rf /usr/share/nginx/html/*

# Копируем фронт из контейнера frontend
COPY --from=react_frontend /usr/share/nginx/html/ /usr/share/nginx/html/

# Копируем конфиг Nginx
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
