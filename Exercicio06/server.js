var express = require('express');
var bodyParser = require('body-parser');

var port = 3015
var ser = '127.0.0.1'

var clientes = require('../Exercicio05/clientes');

app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));


app.post('/cadastro', function (req, res) {
    console.log(req.body);
    res.end( JSON.stringify(req.body));
});


console.log(" Executando em " + ser + ":" + port);

app.listen(port);
