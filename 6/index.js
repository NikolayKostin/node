//Реализовать веб-сервер, который возвращает файлы в папке public
var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(5300, function () {
	console.log('Server is listening port http://localhost:5300/');
});

//создать в корне проекта папку public
// создать index.html в publc
// localhost:5300/index.html