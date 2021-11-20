#!/bin/sh
 npm install   
 pm2 start server.js --name "Website"
 exit
EOF
