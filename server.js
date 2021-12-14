const express = require('express');
const path = require('path');
var http = require('http');
var https = require('https');
var fs = require('fs');

const app = express();
const sslport = 3000;
const nonsslport = 3001;

var options = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./certificate.pem'),
};

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

var server = https.createServer(options, app).listen(sslport, function(){
  console.log("Express server listening on port " + sslport);
});

/*
var server = http.createServer(app).listen(nonsslport, function(req, res){
  console.log("Express server listening on port " + nonsslport);
  console.log(req);
});
*/