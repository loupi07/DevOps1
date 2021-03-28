FROM node:latest
WORKDIR /app
COPY package.json nodemon.json /app/
RUN npm install
COPY . /app
EXPOSE 5000
CMD ["npm", "start"]