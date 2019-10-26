FROM node:carbon-alpine
RUN MKDIR /RestPeople
COPY app.js /RestPeople
COPY package.json /RestPeople
WORKDIR /RestPeople
RUN npm install
EXPOSE 3000
CMD node app.js