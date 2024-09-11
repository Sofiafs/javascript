var https = require('http');

https.createServer(function(req, res) {
    req.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World"');
}).listen(8080);