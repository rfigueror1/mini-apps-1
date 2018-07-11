
var information = require('./db/information.js')
var express =     require('express');
var path =        require('path')
var bodyParser =  require('body-parser');
var app =         express();
var fs =          require('fs');

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

  var stringData = JSON.stringify(data);

  fs.writeFile('../client/dist/distFile.csv', stringData, (err) => {
    if (err) throw err;
      console.log('The file has been saved!');
    });

  console.log(req.body.user_message, 'here at server');

  var results = [];

  if(data.children.length !==0){
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
    helperFunction(data);
    //process the results
    for(var i = 0; i<results.length; i++){
      information.add(results[i].firstName, results[i].lastName,
        results[i].county, results[i].city,
        results[i].role, results[i].sales,
        (err, results) => {
        if(err){
          return res.status(400).send(err);//something wrong with the server
        }
        res.status(201).send();
      })
    }
  }

})

app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, ()=> {console.log('listening in port 3000')});
//
