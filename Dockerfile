FROM node:12.16.1-alpine as node
RUN mkdir -p /usr/src/app
COPY ./* /usr/src/app/
WORKDIR /usr/src/app
RUN npm install
RUN npm start