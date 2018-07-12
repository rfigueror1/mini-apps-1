var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Ricarofi1',
  database : 'costumer_information'
});

connection.connect();

var retrieveBusiness = function(callback, business){
  queryString = 'SELECT * FROM costumers_f1';
  connection.query(queryString, function (error, results) {
    if (error){
      callback(error);
    }
    callback(null, results);
  });
}

var addF1 = function(name, email, password, callback){
  queryString = 'INSERT INTO costumers_f1 (name, email,\
   password) VALUES (?,?,?)';
  var postFields = [name, email, password];
  connection.query(queryString, postFields, function (error, results) {
    if (error){
      callback(error);
    }
    callback(null, results);
  });
}

var addF2 = function(address, city, state, zip_code, phone, email ,callback){
  queryString = 'INSERT INTO costumers_f2 (address, city,\
  state, zip_code, phone, id) VALUES (?,?,?,?,? ,(SELECT id FROM costumers_f1 WHERE email=?))';
  var postFields = [address, city, state, zip_code, phone, email];
  connection.query(queryString, postFields, function (error, results) {
    if (error){
      callback(error);
    }
    callback(null, results);
  });
}

var addF3 = function(card, expiry, cvv, zip_billing, email ,callback){
  queryString = 'INSERT INTO costumers_f3 (card, expiry,\
  cvv, zip_billing, id) VALUES (?,?,?,? ,(SELECT id FROM costumers_f1 WHERE email=?))';
  var postFields = [card, expiry, cvv, zip_billing, email];
  connection.query(queryString, postFields, function (error, results) {
    if (error){
      callback(error);
    }
    callback(null, results);
  });
}

module.exports = {retrieveBusiness, addF1, addF2, addF3};
