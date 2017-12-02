var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 8080);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
