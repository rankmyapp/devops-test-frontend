FROM node:alpine

WORKDIR /app
COPY . /app

RUN yarn && yarn build
RUN yarn global add serve

CMD [ "serve", "-s", "build" ]
