//Реализовать веб-сервер, отображающий список записей и позволяющий добавлять новые и удалять старые
var express = require('express');
var app = express();
var data = require('./data.json');

app.get('/records', function(req, res) {
	res.json(data);
});

app.post('/records', function(req, res) {
	res.json(subdata);
});

app.delete('/records/:id', function(req, res) {
	var id = req.param.id;
	var item = data.filter(function(item) {
		return item.id == id;
	});
	data.splice(data.indexOf(item), 1)
});

app.listen(5300, function () {
	console.log('Server is listening port http://localhost:5300/');
});