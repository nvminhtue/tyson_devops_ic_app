FROM node:20:10.0 as builder_image

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# FROM node:20:10.0-alpine as app_image
FROM node:20:10.0 as app_image

WORKDIR /app

COPY --from=builder_image /app .

CMD ["yarn", "start:prod"]
