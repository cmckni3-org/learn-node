var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {
        'content-type' : 'text/html'
    });
    response.write('<h1>Hello, world!</h1>')
    response.write('Yes, this is dog<br />');
    response.write('Dog is running<br />');
    setTimeout(function(){
       response.write('<h3>Dog is done</h3>');
       response.end();
       // alternative to the above
       // response.end('<h3>Dog is done</h3>');
    }, 5000);
    // response.end();
}).listen(8080);
console.log("listening on port 8080");