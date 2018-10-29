#! /usr/bin/env node

const server = require('./app');
const port = 3000;

var logger = require('./config/winston');

server.listen(port, () => {
  logger.info(`Starting server on port: ${port}`);
  // console.log('Server running on port: %d', port);
});


