const express = require('express');
const app = express();
const information = require('./db/information.js');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json());

 //serve static files
 app.use(express.static(__dirname + '/client/dist'));

 app.get('/game', function(req, res){
   information.retrieveAllPlays((err, results) => {
     if(err){
       return res.status(400).send(err);
     }
     res.json(results);
   })
 });

 app.post('/game', function(req, res){
   var data = req.body;
   var x = data.x;
   var y = data.y;
   var player = data.player;
   information.makeMove(x, y, player, (err, results) => {
     if(err){
       return res.status(400).send(err);
     }
     res.status(201).send();
   })
 });

 app.listen(3000, () =>{ console.log('server listening on port 3000'); });
