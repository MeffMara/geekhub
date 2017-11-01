
var express = require('express');

var server = express();

server.use(express.static('public'));

server.use( function (request, response){
    
});

server.listen(8086);