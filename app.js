const express = require('express');

// var logger = require('./config/winston');
var morgan = require('morgan');
var path = require('path');
var fs = require('fs');

const app = express();

// Bootstrap application settings
require('./config/express')(app);

// const morganFormat = ': method: url: status: response - time ms -: res[content - length]';
morgan(':method :url :status :res[content-length] - :response-time ms');

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'));

// setup the logger
app.use(morgan('combined', {
  stream: accessLogStream
}));


/**
 * entry point for the web app
 */
app.get('/', (req, res) => {
  // res.render('index');
  res.send('hello world');
});

module.exports = app;
