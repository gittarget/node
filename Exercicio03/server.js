var http_IP = '127.0.0.1';
var http_port = 3003;
var http = require('http');

var server = http.createServer(function(req, res) {
    require('./router').get(req, res);
});

server.listen(http_port, http_IP);
console.log('Servidor node executando em http://' + http_IP + ':' + http_port);
;