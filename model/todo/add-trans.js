'use strict';

const Promise = require('bluebird');

const db = require('../../config/db');
const sequelize = require('../../config/sequelize');

module.exports = (param) => {

  return sequelize.transaction(function (t) {
    // chain all your queries here. make sure you return them.
    const title = param.title;
    const sql = `insert into todo (title) values('${title}')`;

    return sequelize.query(sql, {transaction: t})
    .spread((results, metadata) => {
      const insertId = results.insertId;

      if (insertId % 2 === 0) {
        const err = new Error('服务器错误');
        err.code = 1;
        throw err;
      }

      const sql = `insert into todo_status (todo_id) values(${insertId})`;
      return sequelize.query(sql, {transaction: t});
    });
  })
  .then(function (result) {
    // Transaction has been committed
    // result is whatever the result of the promise chain returned to the transaction callback
    return result;
  })
  .catch(function (err) {
    // Transaction has been rolled back
    // err is whatever rejected the promise chain returned to the transaction callback
    console.log(err);
    throw err;
  });

};