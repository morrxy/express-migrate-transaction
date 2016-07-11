'use strict';

const obj = {};
module.exports = obj;

obj.list = require('./todo/list');
obj.single = require('./todo/single');
obj.add = require('./todo/add');
obj.addTrans = require('./todo/add-trans');