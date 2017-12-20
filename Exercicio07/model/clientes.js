var lista = function() {
    var clientes = { "clientes":[
            {
                "id" : 1,
                "nome": "Floriano Peixoto",
                "sexo": "Masculino",
                "dataNascimento": "2011-12-12"
            },{
                "id" : 2,
                "nome": "Prudente de Morais",
                "sexo": "Masculino",
                "dataNascimento": "2011-12-12"
             },{
                "id" : 3,
                "nome": "Campos Sales",
                "sexo": "Masculino",
                "dataNascimento": "2011-12-12"
            },{
                "id" : 4,
                "nome": "Rodrigues Alves",
                "sexo": "Masculino",
                "dataNascimento": "2011-12-12"
            },{
                "id" : 5,
                "nome": "Affonso Penna",
                "sexo": "Masculino",
                "dataNascimento": "2011-12-12"
            }]
    };
    return clientes;
};

exports.listaClientes = lista();
