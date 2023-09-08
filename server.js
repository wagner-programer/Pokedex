var http = require('http');
 
http.createServer(function(request, response)  {
  if (request.method === 'POST' && request.url === '/echo') {
    request.pipe(response);
  }
}).listen(8080);