FROM node:16-alpine3.14

ENV APP_ROOT /app

RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}

ADD . ${APP_ROOT}
RUN yarn

EXPOSE 8080

CMD [ "yarn", "serve" ]
