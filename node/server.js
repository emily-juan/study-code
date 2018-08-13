var http = require('http');

var server = http.createServer(function(req, res) {
  res.end("<your-name>: " + new Date().toISOString());
})

server.listen(8080);