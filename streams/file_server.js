var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function(request, response){
    var newFile = fs.createWriteStream('readme_copy.md');
    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0;
    request.pipe(newFile);
    
    request.on('data', function(chunk){
        uploadedBytes += chunk.length;
        var progress = (uploadedBytes / fileBytes) * 100;
        response.write("progress: " + parseInt(progress, 10) + "%\n");
    });
    
    request.on('end', function(){
        response.end("uploaded!\n");
    });
});



server.listen(8080);