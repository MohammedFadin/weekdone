FROM node:12

ENV MONGO_HOST=guestware-mongo MONGO_PORT=27017 MONGO_DB=guestware MONGO_USER=guestware1 MONGO_PASS=guestware1

COPY ./ /app

WORKDIR /app

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]