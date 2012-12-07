var http = require('http');
var httpProxy = require('http-proxy');
httpProxy.createServer(80, 'some-target.com').listen(process.env.PORT || 8000);
