'use strict';

const Promise = require('bluebird');
const db = require('../config/db');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.using(db(), (conn) => {
      const sql = `INSERT INTO \`todo\` (\`id\`, \`title\`, \`create_time\`, \`update_time\`, \`descrip\`) VALUES ('1', 'sleeping', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '早睡');
      INSERT INTO \`todo_status\` (\`id\`, \`todo_id\`, \`done\`) VALUES ('1', '1', '0');`;

      return conn.queryAsync(sql, []);
    });
  },

  down: function (queryInterface, Sequelize) {
    return Promise.using(db(), (conn) => {
      const sql1 = `DELETE FROM \`todo\` WHERE \`id\` IN ('1');`;
      const sql2 = `DELETE FROM \`todo_status\` WHERE \`id\` IN ('1');`;

      return Promise.all([
        conn.queryAsync(sql1, []),
        conn.queryAsync(sql2, [])
      ]);
    });
  }
};
