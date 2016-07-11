'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
  const title = param.title;

  return Promise.using(db(), conn => {
    const sql = `insert into todo (title) values(?)`;
    return conn.queryAsync(sql, [title]);
  })
  .then(data => {
    const insertId = data.insertId;
    if (insertId % 2 === 0) {
      const err = new Error('服务器错误');
      err.code = 1;
      throw err;
    }

    return Promise.using(db(), conn => {
      const sql = `insert into todo_status (todo_id) values(?)`;
      return conn.queryAsync(sql, [insertId]);
    });
  })

};