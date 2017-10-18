var express = require('express');
app = express();

app.use(express.static(__dirname + '/public'));

console.log(__dirname);

app.listen(8080);