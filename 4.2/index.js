//Реализовать тайм-сервер, отображающий текущее время
var express = require('express');
var app = express();

app.get('/time', function(req, res) {
	res.send(new Date().toLocaleString());
});

app.listen(5300, function () {
	console.log('Server is listening port http://localhost:5300/');
});

// http://localhost:5300/time