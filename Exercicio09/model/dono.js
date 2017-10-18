
var mongoose = require('mongoose'); //modulo do mongose para persistencia no MongoDb
var Schema = mongoose.Schema;

// Criação do modelo
var donoSchema = new Schema({
    nome: String,
    telefone: String,
    endereco: String,
    ativo: Boolean,
    credito: Number,
    dataCriacao: Date,
    dataAlteracao: Date
});

var Dono = mongoose.model('Dono', donoSchema);



// Atualização de data ou inclusao data de criação
donoSchema.pre('save', function(next) {

    var currentDate = new Date();
    this.dataAlteracao = currentDate;

    if (!this.dataCriacao)
        this.dataCriacao = currentDate;

    next();
});

module.exports = Dono;