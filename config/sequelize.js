'use strict';

const Sequelize = require('sequelize');

module.exports = new Sequelize('express-migrate', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});