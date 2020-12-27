FROM node:12-alpine

WORKDIR /usr/src/app

RUN apk --no-cache add curl

COPY package*.json ./

RUN npm install --save-prod

COPY ./ ./

CMD [ "npm", "run", "start" ]
