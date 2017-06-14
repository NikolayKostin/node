//Реализовать эхо-сервер, сервер должен на путь /echo отвечать сообщением, которое отправлено в query
var express = require('express');
var app = express();

app.get('/echo', function(req, res) {
	res.send(req.query.say);
});

app.listen(5300, function () {
	console.log('Server is listening port http://localhost:5300/');
});

//http://localhost:5300/echo?say=hello