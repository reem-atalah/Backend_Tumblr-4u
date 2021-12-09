FROM node:14
WORKDIR /app
#COPY package.json /app/package.json 
copy . .
RUN npm install
#copy . /app
EXPOSE 5000
CMD [ "node" , "script.js" ]
