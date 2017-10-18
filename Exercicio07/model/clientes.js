var lista = function() {
    var clientes = { "clientes":[
            {
                "nome": "Floriano Peixoto",
                "sexo": "Masculino",
                "dataNascimento": "2011-12-12"
            },{
                "nome": "Prudente de Morais",
                "sexo": "Masculino",
                "dataNascimento": "2011-12-12"
             },{
                "nome": "Campos Sales",
                "sexo": "Masculino",
                "dataNascimento": "2011-12-12"
            },{
                "nome": "Rodrigues Alves",
                "sexo": "Masculino",
                "dataNascimento": "2011-12-12"
            },{
                "nome": "Affonso Penna",
                "sexo": "Masculino",
                "dataNascimento": "2011-12-12"
            }]
    };
    return clientes;
};

exports.listaClientes = lista();
