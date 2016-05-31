'use strict';

const express = require('express');
const app = express();

app.use('/', require('./route/index'));
app.use('/user', require('./route/user'));
app.use('/mission', require('./route/mission'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});