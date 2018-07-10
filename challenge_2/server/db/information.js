var connection = require('./index.js');

const retrieveAll = function(callback){
  var queryString = 'SELECT * from general_information';
  connection.query(queryString, (err, results) =>{
    if(err){
      callback(err);
      return;
    }
    callback(null,results);
  })
}

const retrieveSpecific = function (firstName, lastName, callback){
  var queryString = 'SELECT * from general_information WHERE firstName=? AND lastName=?';
  connection.query(queryString, [firstName, lastName] ,(err, results) =>{
    if(err){
      callback(err);
      return;
    }
    callback(null,results);
  })
}

const add = function (firstName, lastName, county, city, role, sales, callback){
  var queryString = 'INSERT INTO general_information \
  (firstName, lastName, county, city, role, sales)\
  VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(queryString, [firstName, lastName, county, city, role, sales], (err, results) =>{
    if(err){
      callback(err);
      return;
    }
    callback(null,results);
  })
}
 //probado que si funciona
 module.exports = {retrieveAll, add,};
