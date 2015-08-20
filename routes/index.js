var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('Accessing home...');
  var connection = mysql.createConnection({
    host: process.env.MYSQL_PORT_3306_TCP_ADDR,
    user: 'root',
    port: process.env.MYSQL_PORT_3306_TCP_PORT,
    password: process.env.MYSQL_ENV_MYSQL_ROOT_PASSWORD,
    database: 'foo'
  });

  connection.connect();
  
  console.log('Connected to Mysql' + process.env.MYSQL_PORT_3306_TCP);
  connection.query('SELECT * FROM user', function (err, rows, fields) {
    if (err) throw err;
    
    console.log('Get data from my-sql:' + rows);
    res.render('index', { title: 'My Web Application', users: rows});
  });

  connection.end();
  console.log('Leaving home...');
});

module.exports = router;
