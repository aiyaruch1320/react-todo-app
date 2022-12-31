FROM node:18.11.0-alpine3.15

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
