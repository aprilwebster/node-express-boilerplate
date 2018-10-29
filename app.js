const express = require('express');

var logger = require('./config/winston');

const app = express();

// Bootstrap application settings
require('./config/express')(app);

logger.info('Hello world');
logger.debug('Debugging info');

/**
 * entry point for the web app
 */
app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
