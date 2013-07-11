var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var webPage = fs.readFileSync(index.html);
  response.send(webPage);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
