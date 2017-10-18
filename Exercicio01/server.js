var http = require('http');

http.createServer(function(req,res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<p>Nome: Cassio Trindade!</p>');
    res.write('<p>Data de Nascimento: 07/maio/1970</p>');
    res.end('<p>E-mail: casssiowt@gmail.com</p>');
}).listen(3000);

console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');