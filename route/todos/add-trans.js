'use strict';

const Promise = require('bluebird');

const sendError = require('../../helper/sendError');

module.exports = (req, res) => {
  const title = req.body.title;

  Promise.resolve()
  .then(() => {
    return addTodo(title);
  })
  .then((data) => {
    res.send({
      data: {},
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

function addTodo(title) {
  const todo = require('../../model/todo');
  return todo.addTrans({
    title: title
  })
}