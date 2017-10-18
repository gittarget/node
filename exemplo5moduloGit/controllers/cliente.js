var template  = require('../views/template-main');
var data = require('../model/test-clientes');

exports.get = function(req, res) {
    var listaClientes = data.listaClientes;
    var str = "",
        i = 0;
    console.log(listaClientes.length)
    for (i = 0; i < listaClientes.clientes.length;) {
        str = str + "<tr>"
        str = str + "<td>" + i + "</td>";
        str = str + "<td>" + listaClientes.clientes[i].nome + "</td>";
        str = str + "<td>" + listaClientes.clientes[i].dataNascimento + "</td>";
        str = str + "</tr>\n"
        i = i + 1;
    }

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(template.build("Clientes", "Lista de Clientes",
       montaTabela(str)));
    res.end();
};

function montaTabela(str) {


    var content = "<table class='table table-condensed'>\
        <thead>\
            <tr>\
                <th>#</th>\
                <th>Nome</th>\
                <th>Data NAscimento</th>\
                <th></th>\
            </tr>\
        </thead>\
        <tbody>" + str + "\n" ;

    content += "</tbody></table>";

    return content;
}