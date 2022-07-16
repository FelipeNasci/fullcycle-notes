FROM nginx:1.23.0-alpine

WORKDIR /usr/share/nginx/html

COPY html .

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD ["nginx", "-g", "daemon off;"]