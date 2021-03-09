FROM node:12

## Use ENV when deploying locally
# ENV MONGO_HOST=weekdone-mongo-mongodb MONGO_PORT=27017 MONGO_DB=weekdone-reviews MONGO_USER= MONGO_PASS=

COPY ./ /app

WORKDIR /app

RUN npm ci

EXPOSE 80

CMD ["npm", "start"]