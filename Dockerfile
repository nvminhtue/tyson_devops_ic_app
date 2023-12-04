FROM node:20:10.0 as builder_image

WORKDIR /app

ARG NODE_ENV=production
ARG PORT=4000

ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# FROM node:20:10.0-alpine as app_image
FROM node:20:10.0 as app_image

WORKDIR /app

COPY --from=builder_image /app .

CMD ["yarn", "start:prod"]
