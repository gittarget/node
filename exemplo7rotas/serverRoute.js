

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version: 1.0
        , code: 200
        , name: 'CAWT Informática Ágil'
        , created_at: date
    }
    , ERROR = {
        message: "Method Not Allowed"
        , code: 405
    }
;

http.createServer(function(req, res){
    let url = req.url
        , method = req.method
    ;

    switch(url){
       case "/api/cawt/read":
            if(method === "GET"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
       break;
            default:
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            ERROR.message = "Not Found";
            ERROR.code = 404
            res.write(JSON.stringify(ERROR));
            break;
    }

    res.end();
})
    .listen(3009, function(){
        console.log('Servidor rodando em localhost:3009');
    });