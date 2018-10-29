const express = require('express');

const app = express();

// Bootstrap application settings
require('./config/express')(app);

/**
 * entry point for the web app
 */
app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
