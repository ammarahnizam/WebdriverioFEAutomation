FROM node:lts
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN yarn install
