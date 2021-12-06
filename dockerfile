FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
EXPOSE 5000
CMD [ "node", "script.js" ]
