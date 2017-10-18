var template = require('../views/template-main');
exports.get = function (req, res) {
    res.writeHead(404, {
        'Content-Type': 'text/html'
    });
    res.write(template.build("404 - Page not found", "O!! não um 404", "<p>Esta não é a página que você está procurando ...</p>"));
    res.end();
};