# Stage 1
FROM node:12.16.1-alpine as build-step
RUN mkdir -p /app3
WORKDIR /app3
COPY package.json /app3
RUN npm install
COPY . /app3

RUN npm run build

# Stage 2

FROM nginx:1.17.1-alpine

COPY --from=build-step /app3/dist/angular-boilerplate /usr/share/nginx/html