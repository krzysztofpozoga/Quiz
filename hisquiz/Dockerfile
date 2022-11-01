FROM node:16.18-alpine

RUN apk update && apk upgrade && \
    mkdir /app

COPY . /app
WORKDIR /app

CMD npm i && \
    npm run dev

EXPOSE 3000

