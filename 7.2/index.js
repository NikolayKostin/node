//Реализовать веб-сервер, осуществляющий фильтр записей, на основе параметров в query

var express = require('express');
var app = express();
var data = require('./data.json');

app.get('/records', function(req, res) {
	var filter = req.query.filter;

	subdata = data.filter(function(item){
		return item.color == filter;
	});

	res.json(subdata);
});

app.listen(5300, function () {
	console.log('Server is listening port http://localhost:5300/');
});

// localhost:5300/records?filter=red