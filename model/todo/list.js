'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = () => {
  return Promise.using(db(), conn => {
    const sql = `select t.*, ts.done from 
    todo as t
    inner join
    todo_status as ts
    on t.id = ts.todo_id`;
    return conn.queryAsync(sql, []);
  });
};