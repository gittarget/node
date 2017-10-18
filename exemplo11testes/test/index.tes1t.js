/*
Com o Nock, você pode especificar um endpoint para simular, a resposta esperada da solicitação no formato JSON.
 A idéia por trás disso é que não estamos testando a API externa, e sim testando nossa própria aplicação.
*/


const expect = require('chai').expect;
const nock = require('nock');
const getBook = require('../app').getBook;
const response = require('./response');



describe('Busca livro mockado', () => {
    beforeEach(() => {
        nock('http://www.ages.pucrs.br/trocasapi/books/')
            .get('/id/59cc037152601d036422d541')
            .reply(200, response);
    });

    it('Busca um livro por id no response mockado', () => {
        return getBook('59cc037152601d036422d541')
            .then(response => {
                //esperado um objeto
                expect(typeof response).to.equal('object');

                //Verifica autor e titulo
                expect(response.author).to.equal('jovem')
                expect(response.title).to.equal('jovek')
            });
    });
});