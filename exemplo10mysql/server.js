var express = require('express');
var app = express();
var port = 3017;

var mysql = require('mysql'); // Mysql include
var path = require('path');
var bodyParser = require("body-parser"); // Body parser for fetch posted data

var connection = mysql.createConnection({ // Mysql Connection
    host     : 'localhost',
    user     : 'root',
    password : 'senha',
    database : 'pet',
});

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded(
        { extended: false }
));

app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});


app.get('/lista',function(req,res){
    var data = {
        "Data":""
    };

    connection.query("SELECT * from usuario",function(err, rows, fields){

        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = 'No data Found..';
            res.json(data);
        }
    });
});

app.post('/login',function(req,res){
    var email = req.body.email;
    var pass = req.body.password;
    console.log(req.body)
    var data = {
        "Data":""
    };
    connection.query("SELECT * from usuario WHERE usuario=? and senha=? LIMIT 1",[email,pass],function(err, rows, fields){
        console.log(rows.length)
        if(rows.length != 0){
            data["Data"] = "Logado com sucesso";
            res.json(data);
        }else{
            data["Data"] = "Email ou  password invalido.";
            res.json(data);
        }
    });
});


console.log(" Executando em localhost:" + port);
app.listen(port);