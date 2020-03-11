/* eslint-disable */
var config = require('config');

const { connection } = config.get('database');

module.exports = {
  client: 'pg',
  connection
};
