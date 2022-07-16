FROM node:18.4.0

WORKDIR /app

RUN apt-get update && apt-get upgrade -y

COPY /app .

RUN npm install

CMD ["npm start"]