const expect = require('chai').expect;
const getBook = require('./app').getBook;

describe('Exemplo de teste', () => {
    it('Verifica se é verdade', () => {
        expect(true).to.be.true;
    });
});

describe('Busca livro para teste', () => {
    it('Busca um livro por id', () => {
        return getBook('59cc037152601d036422d541')
            .then(response => {
                //console.log(reponse)
                //esperado um objeto
                expect(typeof response).to.equal('object');

                //Verifica autor e titulo
                expect(response.author).to.equal('jovem')
                expect(response.title).to.equal('jovek')
            });
    });
});