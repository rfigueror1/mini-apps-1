
var information = require('./db/information.js')
var express =     require('express');
var path =        require('path')
var bodyParser =  require('body-parser');
var app =         express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//serve static files
//app.use(express.static(__dirname + '/public'));

//for each request this will be done
app.use(function (req, res, next) {
  console.log('Time: %d', Date.now());
  next();
});

app.get('/report', function(req, res){
  information.retrieveAll((err, results) => {
    if(err){
      return res.status(500).send(err);//something wrong with the server
    }
    res.json(results);
  })
})

app.post('/report', function(req, res){
  var data = JSON.parse(req.body.user_message);
  var firstName = data.firstName;//aqui
  var lastName = data.lastName;
  var county = data.county;
  var city = data.city;
  var role = data.role;
  var sales = data.sales;
  information.add(firstName, lastName, county, city, role, sales, (err, results) => {
    if(err){
      return res.status(400).send(err);//something wrong with the server
    }
    res.status(201).send();
  })
  console.log(req.body.user_message, 'here at server');
})

app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, ()=> {console.log('listening in port 3000')});
//
