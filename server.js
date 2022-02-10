const express = require('express');
const path = require('path');
var http = require('http');
var fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('./'))

app.get('/', function(req, res) {
  console.log("A new request received at " + Date.now());
  res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/index', function(req, res) {
  console.log(req.headers.host);
  console.log("A new request received at " + Date.now());
  res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/portfolio', function(req, res) {
  console.log("A new request received at " + Date.now());
  res.sendFile(path.join(__dirname, './portfolio.html'));
});
app.get('/Games', function(req, res) {
  console.log("A new request received at " + Date.now());
  res.sendFile(path.join(__dirname, './Games.html'));
});

var server = http.createServer(app).listen(port, function(req, res){
  console.log("Express server listening on port " + port);
  console.log(req);
});
