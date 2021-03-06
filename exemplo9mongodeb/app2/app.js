var http = require("http");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bemean-cascavel');

var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao.', err)
});
db.on('open', function () {
    console.log('Conexão aberta.')
});
db.on('connected', function(err){
    console.log('Conectado')
});
db.on('disconnected', function(err){
    console.log('Desconectado')
});

var Schema = mongoose.Schema;

var json_schema = {
    name: { type: String, default: '' }
    , description: { type: String, default: '' }
    , alcohol: { type: Number, min: 0}
    , price: { type: Number, min: 0}
    , category: { type: String, default: ''}
    , created_at: { type: Date, default: Date.now }
}

var BeerSchema = new Schema(json_schema);

var Beer = mongoose.model('Beer', BeerSchema);
var msg = "";
var Controller = {
    create: function(req, res){
        var dados = {
            name: 'Skol',
            description: 'Mijo de rato',
            alcohol: 4.5,
            price: 3.0,
            category: 'pilsen'
        };

        var model = new Beer(dados);
        model.save(function (err, data) {
            if (err){
                console.log('Erro: ', err);
                msg = 'Erro: ' + err;
                return res.end(msg);
            }
            console.log('Cerveja Inserida: ', data);
            msg = JSON.stringify(data);
            return res.end(msg);
        });
    }
    , retrieve: function(req, res){
        var query = {};

        Beer.find(query, function (err, data) {
            if (err){
                console.log('Erro: ', err);
                msg = 'Erro: ' + err;
                return res.end(msg);
            }
            console.log('Listagem: ', data);
            msg = JSON.stringify(data);
            return res.end(msg);
        });
    }
    , update: function(req, res){
        var query = {name: /skol/i};

        var mod = {
            name: 'Brahma',
            alcohol: 4,
            price: 6,
            category: 'pilsen'
        };

        var optional = {
            upsert: false,
            multi: true
        };

        Beer.update(query, mod, function (err, data) {
            if (err){
                console.log('Erro: ', err);
                msg = 'Erro: ' + err;
                return res.end(msg);
            }
            console.log('Cerveja alteradas: ', data);
            msg = JSON.stringify(data);
            return res.end(msg);
        });

    }
    , delete: function(req, res){
        var query = {name: /brahma/i };

        Beer.remove(query, function(err, data) {
            if (err){
                console.log('Erro: ', err);
                msg = 'Erro: ' + err;
                return res.end(msg);
            }
            console.log('Cerveja(s) atualizada(s): ', data);
            msg = JSON.stringify(data);
            return res.end(msg);
        });

    }
}


http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});

    var url = req.url;

    switch(url){
        case "/create":
            Controller.create(req, res);
            break;
        case "/retrieve":
            Controller.retrieve(req, res);
            break;
        case "/update":
            Controller.update(req, res);
            break;
        case "/delete":
            Controller.delete(req, res);
            break;
        default:
            res.end("Rota não encontrada");
            break;
    }
}).listen(3000);
console.log('Entre em http://localhost:3000/');