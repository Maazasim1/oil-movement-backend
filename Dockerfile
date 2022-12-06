FROM node:lts-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install
EXPOSE 3001
CMD ["npm","start"]
