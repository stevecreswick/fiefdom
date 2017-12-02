
// webpack.config.prod.js
const path = require('path')
const webpack = require('webpack')
const loaders = require( './webpack.config.loaders' );


module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_HOST': 'https://fiefdom.herokuapp.com'
      }
    })
  ],

  module: {
    loaders: loaders
  }
}
