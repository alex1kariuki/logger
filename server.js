const express = require('express');
const Cabin = require('cabin');     // <-- step 1
const cabin = new Cabin();          // <-- step 2


const app = require('./app');

const server = app.listen(process.env.PORT || 5000, function(){
    var port = server.address().port;
    console.log("Express is working on port " + port);
});

app.use(cabin.middleware);          // <-- step 3
server.timeout = 1000;

const env = process.env.NODE_ENV || 'development';


