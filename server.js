const express = require('express');
const path = require('path');
var http = require('http');
var https = require('https');
var fs = require('fs');
var bouncy = require('bouncy');

const app = express();
const sslport = 3000;
const nonsslport = 3001;

var options = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./certificate.pem'),
};

app.use(express.static('./'))

app.use((req, res, next) => {
  if (req.headers.host == "rancrump.com") {
    next();   
  } 
  else
    return;
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/portfolio', function(req, res) {
  res.sendFile(path.join(__dirname, './portfolio.html'));
});
app.get('/Games', function(req, res) {
  res.sendFile(path.join(__dirname, './Games.html'));
});

var server = https.createServer(options, app).listen(sslport, function(){
  console.log("Express server listening on port " + sslport);
});
var server = http.createServer(app).listen(nonsslport, function(){
  console.log("Express server listening on port " + nonsslport);
});