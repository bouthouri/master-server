FROM node:12.16.0-alpine

WORKDIR /usr/app

COPY dev/package.json .
RUN npm install --quiet

COPY dev .