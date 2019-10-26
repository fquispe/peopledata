FROM node:carbon-alpine
RUN mkdir /RestPeople
COPY src /RestPeople
COPY package.json /RestPeople
WORKDIR /RestPeople
RUN npm install
EXPOSE 3000
CMD node src/app.js