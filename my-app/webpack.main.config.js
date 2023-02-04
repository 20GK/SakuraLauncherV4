const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: require('./webpack.rules'),
  },
};
