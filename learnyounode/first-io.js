
var filename = process.argv[2];

var fs = require('fs');

var data = fs.readFileSync(filename, 'utf8');
console.log(data.split("\n").length);
