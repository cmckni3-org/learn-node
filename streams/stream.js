var fs = require('fs');

var file = fs.createReadStream('readme.md');
var newFile = fs.createWriteStream('todo.md');

file.pipe(newFile);