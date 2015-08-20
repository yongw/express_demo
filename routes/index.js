var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var connection = mysql.createConnection({
    host: process.env.MYSQL_PORT_3306_TCP_ADDR,
    user: 'root',
    port: process.env.MYSQL_PORT_3306_TCP_PORT,
    password: process.env.MYSQL_ENV_MYSQL_ROOT_PASSWORD,
    database: 'foo'
  });

  connection.connect();

  connection.query('SELECT * FROM user', function (err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
  });

  connection.end();
  res.render('index', { title: 'My Web Application' });
});

module.exports = router;
