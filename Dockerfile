FROM node:10-alpine

ENV NODE_ENV=production
ENV PORT=80

RUN mkdir -p /home/node/reecerussell/node_modules

WORKDIR /home/node/reecerussell

COPY . ./

RUN npm install && npm audit fix
RUN npm rebuild node-sass

EXPOSE 80

RUN npm run build

ENTRYPOINT [ "node", "server.js" ]