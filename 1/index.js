//Написать программу, которая по переданному имени текстового файла выводит количество букв в этом тексте
var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, function(err, data){
	if(err) throw err;
	console.log(data.length);
});