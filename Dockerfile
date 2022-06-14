# Stage 1
FROM node:12.16.1-alpine as build-step
RUN mkdir -p /app3
WORKDIR /app3
COPY package.json /app3
RUN npm install
COPY . /app

RUN npm run build --prod

# Stage 2

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/angular-boilerplate /usr/share/nginx/html