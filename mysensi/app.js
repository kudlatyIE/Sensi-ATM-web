var qr = require('node-qr-image');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var randomStringQR = Math.random().toString(36).slice(1);

	var img = qr.image(randomStringQR, {type: 'svg'});
	console.log(typeof img);
	res.writeHead(200, {'Content-Type': 'image/svg+xml' });
    img.pipe(res);
});

// Local listening
/*
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
*/



// Bluemix listening setup

var port = (process.env.VCAP_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');

app.listen(port, host);