// Create web server
// 1. Load the 'http' module
var http = require('http');

// 2. Create a web server
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello, world!</h1>');
}).listen(3000, '