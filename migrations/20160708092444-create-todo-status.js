'use strict';

const Promise = require('bluebird');
const db = require('../config/db');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.using(db(), (conn) => {
      const sql = `CREATE TABLE \`todo_status\` (
        \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
        \`todo_id\` int(11) NOT NULL COMMENT '对应的todo id',
        \`done\` tinyint(1) NOT NULL DEFAULT '0' COMMENT '完成状态 0未完成 1已完成',
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

      return conn.queryAsync(sql, []);
    });
  },

  down: function (queryInterface, Sequelize) {
    return Promise.using(db(), conn => {
      const sql = `DROP TABLE IF EXISTS todo_status;`;

      return conn.queryAsync(sql, []);
    });
  }

};
