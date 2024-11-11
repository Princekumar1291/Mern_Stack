const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'airbnb',
  password: 'Pks@12206676',
});

module.exports = pool.promise();