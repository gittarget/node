
var express = require('express');
var app = express();
var clientes = require('./model/clientes.js')
var port = 3011
var ser = '127.0.0.1'

//console.log(clientes.listaClientes.clientes);
// define o engine ejs para as views
app.set('view engine', 'ejs');

// use resquest.render para renderizar um arquivo.ejs na view

// pagina do index
 app.get('/', function(req, res) {
     res.render('pages/index');
 });

app.get('/list', function(req, res) {

    var titulo = "Listagem Cliente VIP";

    res.render('pages/list', {
        clientes: clientes.listaClientes.clientes,
        titulo: titulo
    });
});

app.post('/list', function(req, res) {

    var titulo = "Listagem Cliente VIP";

    res.render('pages/list', {
        clientes: clientes.listaClientes.clientes,
        titulo: titulo
    });
});

app.get('/edit/:id', function(req, res) {
   
    var cliente = clientes[1]

    console.log(clientes);
    console.log(req.params.id);
    console.log(cliente);

    res.render('pages/edit', { 
        cliente : cliente
    });
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

console.log(" Executando em " + ser + ":" + port);

app.listen(port);