var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Ricarofi1',
  database : 'game'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM table_moves', function (error, results, fields) {
  if (error) throw error;
  console.log('conected to game database');
  console.log(results);
});

module.exports = connection;
