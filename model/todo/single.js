'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');

module.exports = (param) => {
  const todoId = param.todoId;
  return Promise.using(db(), conn => {
    const sql = `select t.*, ts.done from 
    todo as t
    inner join
    todo_status as ts
    on t.id = ts.todo_id
    where t.id = ?`;
    return conn.queryAsync(sql, [todoId]);
  });
};