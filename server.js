var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src/index.html'));

app.listen(process.env.PORT || 8080);
