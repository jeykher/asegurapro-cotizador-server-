FROM node:17-alpine3.12

WORKDIR /home/node/app

ADD . .

RUN npm install

EXPOSE 9000

ENTRYPOINT npm start