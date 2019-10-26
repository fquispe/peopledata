const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser'); 

//Settings
app.set('json spaces',2);
app.set('port', process.env.PORT || '3000');

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.json());

module.exports = app;