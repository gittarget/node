var express = require('express');
var app = express();
var port = 3021;
var ser = '127.0.0.1';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animais');


var Animal = require('./model/animal');

app.get('/', function(req, res) {
    res.write("\/cadatra - Cadastrar um animal\n");
    res.write("\/lista - Cadastrar um animal\n");
    res.end("-------------------------------------");

});

app.get('/cadastra', function( req, res) {
    var novoAnimal = Animal({
        apelido: "Dois",
        dono: "Andre",
        vivo: true,
        endereco: "Rua Frei Clemente, 6",
        dataAlteracao: new Date()
    });

    novoAnimal.save(function(err) {
        if (err){
            console.log('Erro: ', err);
            msg = 'Erro: ' + err;
            return res.end(msg);
        }
        res.end('Salvo o Animal: ' +  novoAnimal.apelido);
    });
});

app.get('/lista', function(req, res) {
    Animal.find({}, function (err, animais) {
        if (err){
            console.log('Erro: ', err);
            msg = 'Erro: ' + err;
            return res.end(msg);
        }
        res.end(JSON.stringify(animais));
    });
})

app.get('/altera', function(req, res) {
    Animal.findByIdAndUpdate("59e3e597dbabdd5a9c18a894", {apelido: 'Rex'}, function (err, animal) {
        if (err){
            console.log('Erro: ', err);
            msg = 'Erro: ' + err;
            return res.end(msg);
        }
        res.end(JSON.stringify(animal));
    });
});


console.log(" Executando em " + ser + ":" + port);
app.listen(port);