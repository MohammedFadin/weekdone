FROM node:12

## Use ENV when deploying locally
# ENV MONGO_HOST=weekdone-mongo-mongodb MONGO_PORT=27017 MONGO_DB=weekdone-reviews MONGO_USER= MONGO_PASS=

ARG app_path=/home/node/app

RUN mkdir $app_path && chown -R node:node $app_path

COPY --chown=node:node ./ $app_path

WORKDIR $app_path

USER node

RUN npm ci

EXPOSE 4000

CMD ["npm", "start"]