var lista = function() {
    var objJson = {
        "financeiro": "Clientes VIPs",
        "count": 5,
        "clientes": [{
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
    return objJson;
};

exports.listaClientes = lista();
