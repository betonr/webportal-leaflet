FROM node:carbon

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN rm -rf node_modules || true
RUN npm install

ENTRYPOINT npm run app