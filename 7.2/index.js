//Реализовать веб-сервер, осуществляющий фильтр записей, на основе параметров в query
var express = require('express');
var app = express();
var data = require('./data.json');

app.get('/records', function(req, res) {
	var count = req.query.say;
	var offset = req.query.offset;

	subdata = data.slice(offset, count);

	res.json(subdata);
});

app.get('/records', function(req, res) {
	var filter = req.query.filter;

	subdata = data.filter(function(item){
		return item.age == filter;
	});

	res.json(subdata);
});

app.listen(5300, function () {
	console.log('Server is listening port http://localhost:5300/');
});
