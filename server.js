var express = require('express');
var app = express();
var glob = require("glob")

app.use('/fetch', express.static('files'))

app.get('/list', function (req, res) {
  glob("./files/*.gltf", [], function (er, files) {
    res.send(files);
  });
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
