var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ricarofi1',
  database: 'information',
})

connection.connect((err) =>{
  if(err){
    console.log('problem connecting mysql', err);
    return;
  }
  console.log('connected to mysql');
});

connection.query('SELECT * FROM general_information;', (err, results) => {
  if(err){
    console.log('problem making the test query in mysql connection');
    return;
  }
  console.log(results);
})

module.exports = connection;
