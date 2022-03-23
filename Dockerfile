FROM node:16.13.1-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/app/

RUN npm install

RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

ARG BACKEND_URL
ENV BACKEND_URL=${BACKEND_URL}

CMD [ "npm" ,"start"]
