÷ dockerfile for frontend
FROM node:latest

WORKDIR /frontend

COPY ./frontend/package*.json ./

RUN npm install

COPY ./frontend .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
