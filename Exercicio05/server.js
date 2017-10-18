var express = require('express');
var bodyParser = require('body-parser');

var port = 3005
var ser = '127.0.0.1'

var clientes = require('./clientes');

app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
       res.send(JSON.stringify(clientes.listaClientes));
});

app.post('/', function (req, res) {
    res.send('POST request para E-MAil');
});

app.get('/list', function (req, res) {
    res.send('GET request para list');
});

app.post('/list', function (req, res) {
    console.log(req.body);
    var pEmail = req.body.email;
    res.end('GET request para list: ' + pEmail);
});

app.get('/ab*cd', function(req, res) {
    res.send('ab*cd');
});

app.delete('/', function (req, res) {
    res.send('DELETE request');
});

app.put('/', function (req, res) {
    res.send('PUT request');
});

app.get('/usuario/:username', function(req, res) {
    var nome = req.params.username;
    res.send("Nome: " + nome);
});

console.log(" Executando em " + ser + ":" + port);

app.listen(port);
