FROM node:12

ARG app_path=/home/node/app

RUN mkdir $app_path && chown -R node:node $app_path

COPY --chown=node:node ./ $app_path

WORKDIR $app_path

USER node

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]