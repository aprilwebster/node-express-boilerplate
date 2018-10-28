// Import the express middleware
const express = require('express');

// built-in node module that provides utilities for working with file and
// directory paths
const path = require('path');

module.exports = function (app) {

  // Use a basic `html` engine for client-side view engine
  // use `jsx` for a React client
  app.set('view engine', 'html');

  // Tells express to look for static files in  
  // the public directory of the application
  app.use(express.static(path.join(__dirname, '..', 'public')));
  
};

