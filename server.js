const express = require('express');
const path = require('path');
var https = require('https');
var fs = require('fs');

const app = express();
const port = 3000;

var options = {
  key: fs.readFileSync('/privatekey.pem'),
  cert: fs.readFileSync('/certificate.pem'),
};

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});