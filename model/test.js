'use strict';

const sequelize = require('../config/sequelize');

function updateDesc() {
  const sql = `update todo
  set descrip = 'new desc'
  where id in (:ids)`;
  
  return sequelize.query(sql, {
    replacements: {
      ids: [1, 3]
    }
  })
  .spread((results, metadata) => {
    console.log(results);
  })
}

updateDesc();