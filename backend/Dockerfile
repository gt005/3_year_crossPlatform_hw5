FROM node:latest

WORKDIR /code

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["node", "src/index.js"]
