var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {
        'content-type': 'text/html'
    })
    fs.readFile('index.html', function(err, contents){
      response.end(contents);
    });
}).listen(8080);