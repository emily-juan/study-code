FROM node:9
WORKDIR /root/app

RUN npm install cnpm -g --registry="https://registry.npm.taoboa.org"

RUN cnpm install
COPY ..
EXPOSE 8080
CMD ["node", "server.js"]