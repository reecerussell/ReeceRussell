FROM node:10-alpine

RUN mkdir -p /home/node/reecerussell/node_modules

WORKDIR /home/node/reecerussell

COPY . ./

RUN npm install && npm audit fix

EXPOSE 80

RUN npm run build

ENTRYPOINT [ "node", "server.js" ]