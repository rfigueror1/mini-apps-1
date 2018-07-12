var connection      = require('./connection');

const retrieveAllPlays = function(callback){
  var stringQuery = 'SELECT * FROM table_moves';
  connection.query(stringQuery, (error, results) => {
    if(error){
      callback(error);
      return;
    }
    callback(null, results)
  })
}

const makeMove = function(x, y, player, callback){
  var params = [x,y,player];
  var stringQuery = 'INSERT INTO table_moves (x,y,player) VALUES (?,?,?)';
  connection.query(stringQuery, params, (error, results) => {
    if(error){
      callback(error);
      return;
    }
    callback(null, results)
  })
}

makeMove(3,3,2, (err, results) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(results);
})

retrieveAllPlays((err, results) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(results);
})

module.exports = {retrieveAllPlays, makeMove};
