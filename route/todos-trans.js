'use strict';

const express = require("express");
const router = express.Router();
module.exports = router;

router.route('/').post(require('./todos/add-trans'));