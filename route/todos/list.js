'use strict';

const Promise = require('bluebird');

const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  Promise.resolve()
  .then(() => {
    return getTodoList();
  })
  .then((data) => {
    res.send({
      data: data,
      status: {
        code: 0,
        msg: 'ok'
      }
    })
  })
  .catch(err => {
    sendError(res, err);
  });
};

function getTodoList() {
  const todo = require('../../model/todo');
  return todo.list();
}