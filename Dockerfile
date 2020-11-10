FROM nginx:1.18
COPY dist/fast-msg-fe /usr/share/nginx/html
EXPOSE 80