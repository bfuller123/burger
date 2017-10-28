const mysql = require('mysql');

module.exports = mysql.createConnection({
  host:'localhost',
  port:3306,
  user:'tempuser',
  password:'simplePassword!',
  database:'burgers_db'
})
