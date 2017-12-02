var express = require('express');
var path = require( 'path' );
var app = express();
var publicPath = express.static(path.join(__dirname, 'public'), { redirect : false });

var herokuUrl = 'https://fiefdom.herokuapp.com'


console.log(process.env.NODE_ENV);

var indexPath  = path.join(__dirname, 'public/index.html');
app.use(publicPath);

// app.use(express.static(__dirname + '/'));
app.set( 'view engine', 'html' );


app.use( function( request, response, next ) {
  response.set( 'Access-Control-Allow-Origin', '*' );
  response.set( 'Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' );
  response.set( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );

  next();
} );

app.get('/', function(request, response) {
  response.set( 'Cache-Control', 'no-cache' );

  response.sendFile(indexPath);
});

app.get('*', function(request, response) {
  response.set( 'Cache-Control', 'no-cache' );

  response.sendFile(indexPath);
});

app.listen(process.env.PORT || 8080);
