//Реализовать веб-сервис, бросающий шестигранный кубик
var express = require('express');
var app = express();

app.listen(7700, function(){
	console.log('Server is running on http://localhost:7700/');
});

app.get('/cube', function(req,res){
	var num = Math.floor(Math.random() * 6 ) + 1;
	res.send(String(num));
	console.log('Return: ' + num);
});

//http://localhost:7700/cube

/*
var http = require('http');

var server = http.createServer();

var port = 7701;
server.listen(7701);
console.log('Server is running on ' + port);

server.on('request', function(request, response) {
    if (request.url == '/dice') {
        var number = Math.floor( Math.random() * 6 ) + 1;
        response.end( String(number) );
        console.log('Return: ' + number);
    } else {
        response.statusCode = 404;
        response.end('Return: not found');
        console.log('Return: ' + number);
    }
});

//http://localhost:7701/dice
*/