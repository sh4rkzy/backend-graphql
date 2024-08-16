FROM node:alpine3.20 AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM build-stage AS test-stage

RUN npm run test

FROM node:alpine3.20 AS production-stage

WORKDIR /app

COPY --from=build-stage /app .

CMD ["npm", "start"]