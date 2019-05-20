FROM node:10.15.0

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD node src/server.js

EXPOSE 8080