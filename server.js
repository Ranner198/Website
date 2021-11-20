const express = require('express');
const path = require('path');
var https = require('https');
var fs = require('fs');


const app = express();
const port = 3000;

const letsEncryptPath = "/etc/letsencrypt/live/rancrump.com"

var options = {
  key: fs.readFileSync(letsEncryptPath + 'privatekey.pem'),
  cert: fs.readFileSync(letsEncryptPath + 'certificate.pem'),
};

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});