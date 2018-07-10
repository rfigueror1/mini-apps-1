var db =          require('./db/information.js')
var express =     require('express');
var path =        require('path')
var bodyParser =  require('body-parser');
var app =         express();

app.use(bodyParser.json());

app.get('/report', function(req, res){
  db.retrieveAll((err, results) => {
    if(err){
      console.log(err);//handle status
      return;
    }
    res.send(results);
  })
})

app.post('./report', function(req, res){
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var county = req.body.county;
  var city = req.body.city;
  var role = req.body.role;
  var sales = req.body.sales;
  db.add(firstName, lastName, county, city, role, sales, (err, results) => {
    if
  })
})

//
