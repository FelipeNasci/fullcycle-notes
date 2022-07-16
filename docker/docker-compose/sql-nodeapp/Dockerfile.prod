FROM node:18-alpine3.15

WORKDIR /app

COPY /app .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "yarn", "dev" ]
# CMD [ "npm", "run", "dev" ]