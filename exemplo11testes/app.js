// 59cc037152601d036422d541
const axios = require('axios');

module.exports = {
    getBook(id) {
        return axios
            .get(`http://www.ages.pucrs.br/trocasapi/books/id/${id}`)
            .then(res => res.data)
            .catch(error => console.log(error));
    }
};