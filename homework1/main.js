var express = require('express');
var bodyParser = require('body-parser');

var server = express();

server.use(express.static('public'));
server.use(bodyParser.urlencoded({extended:true}));

server.use( function (request, response){
    if (request.body.type !== '3') {
        response.sendFile('/home/meff/project/geekhub/homework1/public/erorr.html')
    }
    else {
        response.sendFile('/home/meff/project/geekhub/homework1/public/success.html')
    }
});

server.listen(8089);