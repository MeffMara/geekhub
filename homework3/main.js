
var express = require('express');
var bodyParser = require('body-parser'); 

var server = express();
server.use(express.static('public'));
server.use(bodyParser.urlencoded({extended:true}));
server.use(function(request,response) {
    request;
    
});

server.listen(9001);

