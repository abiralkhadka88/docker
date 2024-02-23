FROM node:21-alpine

RUN mkdir -p /home/docker_node

WORKDIR /home/docker_node

COPY . .

RUN npm install

CMD ["npm", "run", "start:dev"]
