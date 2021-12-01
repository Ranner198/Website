const express = require('express');
const path = require('path');
var https = require('https');
var fs = require('fs');

const app = express();
const port = 3000;

var options = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./certificate.pem'),
};

app.use(express.static('./'))

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

var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});