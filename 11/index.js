//Реализовать эхо-сервер на socket.io
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(3000, function() {
	console.log('Server is running on http://localhost:3000/');
});

io.on('connection', function(socket) {
	socket.on('client-message', function(text) {
		console.log('SOCKET SAYS:', text);
		socket.emit('server-message', text);
	});
});
