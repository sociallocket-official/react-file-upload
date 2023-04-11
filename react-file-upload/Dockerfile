FROM node:14-alpine
MAINTAINER Sociallocket <engineering@sociallocket.com>

ENV PORT=3002

# Update
RUN apk add --update nodejs

# Bundle app source
RUN mkdir -p /app

COPY .husky /app/.husky

COPY package.json /app/package.json
COPY src /app/src
COPY public /app/public

WORKDIR /app
RUN npm install

EXPOSE  3002

CMD ["npm", "start"]