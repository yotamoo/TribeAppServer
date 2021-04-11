var express = require('express');
var app = express();
var glob = require("glob")

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/fetch', express.static('files'))

app.get('/list', function (req, res) {
  glob("./files/*.gltf", [], function (er, files) {
    res.send(files);
  });
});

const port = process.env.PORT || 80

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
