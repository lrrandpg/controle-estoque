FROM node:latest


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install


COPY . .

RUN rm -rf node_modules/
RUN npm update


EXPOSE 80

CMD ["node", "index.js"]
