//Вывести на экран зависимости, указанные в файле package.json
var pkg = require('./package.json');
var deps = pkg.dependencies;

for (var key in deps) {
	console.log(key + ': ' + deps[key]);
}