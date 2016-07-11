'use strict';

const express = require("express");
const router = express.Router();
module.exports = router;

router.route('/').get(require('./todos/list'));
router.route('/:todo_id').get(require('./todos/single'));
router.route('/').post(require('./todos/add'));