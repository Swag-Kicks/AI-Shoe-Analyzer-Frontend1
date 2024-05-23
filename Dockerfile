FROM node:18-alpine

EXPOSE 8081
WORKDIR /client
COPY client .
RUN npm install
RUN npm install
CMD ["npm", "run", "serve"]