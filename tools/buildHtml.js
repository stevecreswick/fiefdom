var fs = require( 'fs' );
var cheerio = require( 'cheerio' );
var colors = require( 'colors' );

/*eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  var $ = cheerio.load(markup);
  var bundleSrc = '/public/bundle.js';

  $('head').prepend('');
  $('body').append( '<script src="' + bundleSrc + '"></script>' );

  fs.writeFile('public/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /public'.green);
  });
});
