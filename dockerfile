FROM node:carbon-alpine
RUN mkdir /peopledata
COPY src /peopledata
COPY package.json /peopledata
WORKDIR /peopledata
RUN npm install
EXPOSE 3000
CMD node src/app.js