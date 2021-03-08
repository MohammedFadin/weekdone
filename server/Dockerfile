FROM node:12

ENV MONGO_HOST=weekdone-mongo-mongodb MONGO_PORT=27017 MONGO_DB=weekdone-reviews MONGO_USER=weekdone MONGO_PASS=weekdone

COPY ./ /app

WORKDIR /app

RUN npm ci

EXPOSE 80

CMD ["npm", "start"]