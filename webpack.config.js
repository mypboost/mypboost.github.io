var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var SRC_DIR = path.resolve(__dirname, 'src');


namespace = 'test'

var config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }]
      },
      {
        test : /\.js?/,
        include : SRC_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  plugins: [
        new CopyWebpackPlugin([
          {
            context: SRC_DIR + '/static',
            from: '**/*',
            to: BUILD_DIR
          }
        ])
  ]
};

module.exports = config;
