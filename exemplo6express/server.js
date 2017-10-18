var express = require('express');
var bodyParser = require('body-parser');

var port = 3005
var ser = '127.0.0.1'

app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('Ola Vivente');
});

app.post('/', function (req, res) {
    res.send('POST request para E-MAil');
});

app.post('/list', function (req, res) {
    console.log(req.body);
    var pEmail = req.body.email;
    res.end('GET request para list: ' + pEmail);
});

app.get('/ab*cd', function(req, res) {
    res.send('ab*cd');
});

console.log(" Executando em " + ser + ":" + port);
app.listen(port);
