'use strict';

const Promise = require('bluebird');
const db = require('../config/db');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.using(db(), (conn) => {
      const sql = `CREATE TABLE \`todo\` (
      \`id\` int(11) unsigned NOT NULL AUTO_INCREMENT,
      \`title\` varchar(50) NOT NULL DEFAULT '' COMMENT '标题',
      \`create_time\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
      \`update_time\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
      PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

      return conn.queryAsync(sql, []);
    });
  },

  down: function (queryInterface, Sequelize) {
    return Promise.using(db(), conn => {
      const sql = `DROP TABLE IF EXISTS todo;`;

      return conn.queryAsync(sql, []);
    });
  }

};
