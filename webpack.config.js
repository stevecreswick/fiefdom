// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const webpack = require('webpack');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },

  // Tell webpack to use html plugin -> ADDED IN THIS STEP
  // index.html is used as a template in which it'll inject bundled app.
  plugins: [
    extractSass,

    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(paths.SRC, 'index.html'),
    }),

    new ExtractTextPlugin('style.bundle.css'), // CSS will be extracted to this bundle file -> ADDED IN THIS STEP

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  // Loaders configuration -> ADDED IN THIS STEP
  module: {
    rules: [

      // We are telling webpack to use "babel-loader" for .js and .jsx files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },

      // CSS loader to CSS files -> ADDED IN THIS STEP
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.scss$/,

        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })

        // TODO: Old Two Untested
        // use: [
        //   {
        //     loader: ExtractTextPlugin.extract({
        //       use: "style-loader" // creates style nodes from JS strings
        //     }),
        //     loader: ExtractTextPlugin.extract({
        //       use: "css-loader" // translates CSS into CommonJS
        //     }),
        //     loader: ExtractTextPlugin.extract({
        //       use: "sass-loader" // compiles Sass to CSS
        //     }),
        //   }
        // ]

        // TODO: Old One
        // loader: ExtractTextPlugin.extract({
        //   use: "css-loader"
        // }),
      },

      // File loader for image assets -> ADDED IN THIS STEP
     // We'll add only image extensions, but you can things like svgs, fonts and videos


      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  // Enable importing JS files without specifying their's extenstion -> ADDED IN THIS STEP
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    // contentBase: paths.SRC,
    hot: true
  }
};
