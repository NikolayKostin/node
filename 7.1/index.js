//Реализовать веб-сервер, отображающий список записей, с поддержкой пейджинга (count, offset)
var express = require('express');
var app = express();
var data = require('./data.json');

app.get('/records', function(req, res) {
	var count = req.query.count;
	var offset = req.query.offset;

	var subdata = data.slice(offset, count);

	res.json(subdata);
});

app.listen(5300, function () {
	console.log('Server is listening port http://localhost:5300/');
});

// localhost:5300/records?offset=1&count=2