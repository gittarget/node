var lista = function() {
    var objJson = {
        "reino": "Animal",
        "count": 4,
        "animais": [{
            "especie": "Mamífero"
        }, {
            "especie": "Insetos"
        }, {
            "especie": "Peixes"
        }, {
            "especie": "Aves"
        }]
    };
    return objJson;
};

exports.listaEspecies = lista();