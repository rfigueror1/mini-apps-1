const connection = require('./db/connection.js');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const port = 3000;

//serve static files in directory
app.use(bodyParser.json());

app.get('/info', function(req, res){
  //check for errors
  connection.retrieveBusiness((err, results) =>{
    if(err){
      console.log('problem with the get');
      return res.status(400).send(err);
    }
    console.log('results of get request sent');
    res.send(results);
  })
});

app.post('/info', function (req, res) {
  console.log(req);
  var data = req.body;
  var kind = req.body.form;
  if(kind === "1"){
    var name = data.name;
    var email = data.email;
    var password = data.password;

    fs.writeFile('./mail.txt', email+'', (err) => {
      if (err) throw err;
      console.log('mail has been saved!');
    });

    connection.addF1(name, email, password, (err, results) => {
      if(err){
        console.log('problem with the f1 post');
        return res.status(401).send(err);
      }
      console.log('f1 post succesful');
      res.status(201).send();
    })
  }
  if(kind === "2"){
    var address = data.address;
    var city = data.city;
    var state = data.state;
    var zip_code = data.zip_code;
    var phone = data.phone;
    var email = '';

    fs.readFile('./../client/mail.txt', (err, data) => {
      if (err) throw err;
      email = data;
    });

    connection.addF2(address, city, state, zip_code, phone, email, (err, results) => {
      if(err){
        console.log('problem with the f2 post');
        return res.status(401).send(err);
      }
      console.log('f2 post succesful');
      res.status(201).send();
    })
  }

  if(kind === "3"){
    var card = data.card;
    var expiry = data.expiry;
    var cvv = data.cvv;
    var zip_billing = data.zip_code;
    var email = '';

    fs.readFile('./../client/mail.txt', (err, data) => {
      if (err) throw err;
      email = data;
    });

    connection.addF3(card, expiry, cvv, zip_billing, email,  (err, results) => {
      if(err){
        console.log('problem with the f2 post');
        return res.status(401).send(err);
      }
      console.log('f3 post succesful');
      res.status(201).send();
    })
  }
});

app.use(express.static('./../public'));

app.listen(3000, function () {
  console.log('Server Ready');
});
