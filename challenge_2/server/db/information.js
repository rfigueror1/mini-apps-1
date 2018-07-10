var connection = require('./index.js');

const retrieveAll = function(callback){
  var queryString = 'SELECT * from general_information';
  connection.query(queryString, (err, results) =>{
    if(err){
      console.log('problem with db query trying to retrieve all data');
      return;
    }
    callback(results);
  })
}

const retrieveSpecific = function (firstName, lastName, callback){
  var queryString = 'SELECT * from general_information WHERE firstName=? AND lastName=?';
  connection.query(queryString, [firstName, lastName] ,(err, results) =>{
    if(err){
      console.log('problem with db query trying to retrieve specific data');
      return;
    }
    callback(results);
  })
}

const add = function (firstName, lastName, county, city, role, sales, callback){
  var queryString = 'INSERT INTO general_information \
  (firstName, lastName, county, city, role, sales)\
  VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(queryString, [firstName, lastName, county, city, role, sales], (err, results) =>{
    if(err){
      console.log('problem with db query trying to add new data');
      return;
    }
    callback(results);
  })
}
