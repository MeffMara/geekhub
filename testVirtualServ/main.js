
var express = require('express');
var bodyParser = require('body-parser');

var server = express();

server.use(express.static('public'));

server.use( function (request, response){
    request;
});

server.listen(8086);