var template  = require('../views/template-main');
var test_data = require('../model/test-data');

exports.get = function(req, res) {
    var listaEspecies = test_data.listaEspecies;
    var strTeam = "",
        i = 0;
    for (i = 0; i < listaEspecies.count;) {
        strTeam = strTeam + "<li>" + listaEspecies.animais[i].especie + "</li>";
        i = i + 1;
    }
    strTeam = "<ul>" + strTeam + "</ul>";
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(template.build("Teste de uma pagina Web com node.js", "Bem vindo a lista de espécies",
        "<p>As epécies " + listaEspecies.reino + " são:</p>" + strTeam));
    res.end();
};