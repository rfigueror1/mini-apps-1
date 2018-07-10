
var information = require('./db/information.js')
var express =     require('express');
var path =        require('path')
var bodyParser =  require('body-parser');
var app =         express();

app.use(bodyParser.json());

//serve static files
//app.use(express.static(__dirname + '/public'));

//for each request this will be done
app.use(function (req, res, next) {
  console.log('Time: %d', Date.now());
  next();
});

app.get('/report', function(req, res){
  db.retrieveAll((err, results) => {
    if(err){
      return res.status(500).send(err);//something wrong with the server
    }
    res.json(results);
  })
})

app.post('/report', function(req, res){
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var county = req.body.county;
  var city = req.body.city;
  var role = req.body.role;
  var sales = req.body.sales;
  db.add(firstName, lastName, county, city, role, sales, (err, results) => {
    if(err){
      return res.status(400).send(err);//something wrong with the server
    }
    res.status(201).send();
  })
  var results = [];

  var helperFunction = function(node){
    if(!node.children){
      return;
    }else{
      for(var i = 0; i<node.children.length; i++){
          results.push(node.children[i]);
          helperFunction(node.children[i]);
        }
    }
  }
  helperFunction(req.body);
  //process the results
  for(var i = 0; i<results.length; i++){
    db.add(results[i].firstName, results[i].lastName, results[i].county, results[i].city, results[i].role, results[i].sales, (err, results) => {
      if(err){
        return res.status(400).send(err);//something wrong with the server
      }
      res.status(201).send();
    })
  }
})

app.listen(3000, ()=> {console.log('listening in port 3000')});
//
