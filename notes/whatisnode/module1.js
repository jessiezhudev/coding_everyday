//http is built into node, so we don't need to install it
var http = require('http');

var server = http.createServer(function(req, res){
  console.log('I got a response');
  res.write('hi');
  res.end()
});

server.listen(3000);
//node this file and open the browser localhost:3000
