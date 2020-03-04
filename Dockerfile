FROM node:10-alpine AS base

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app

FROM base AS yarn-dependencies

USER root
RUN apk --no-cache --virtual build-dependencies add g++ gcc git make python openssh-client yarn
USER node

# Install dependencies.
COPY --chown=node:node package.json yarn.lock /home/node/app/
RUN yarn install --force

# Build application.
COPY --chown=node:node . ./
RUN mkdir -p /home/node/app/public \
  && NODE_ENV=development yarn build

FROM base AS build-dist

# Copy bundle folder.
COPY --chown=node:node --from=yarn-dependencies /home/node/app /home/node/app

# Run server.
CMD node dist/server/bin/index.js
