'use strict';

const Promise = require('bluebird');
const db = require('../config/db');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.using(db(), (conn) => {
      const sql = `alter table todo add COLUMN descrip varchar(500) NULL DEFAULT '' COMMENT '描述'`;

      return conn.queryAsync(sql, []);
    });
  },

  down: function (queryInterface, Sequelize) {
    return Promise.using(db(), (conn) => {
      const sql = `alter table todo drop column descrip`;

      return conn.queryAsync(sql, []);
    });
  }
};
