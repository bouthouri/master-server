FROM node:12.16.0-alpine

WORKDIR /usr/app

COPY dev/package.json .
RUN yarn install --quite
RUN yarn global add pm2

COPY dev .