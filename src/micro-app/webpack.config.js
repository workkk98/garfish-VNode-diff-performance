const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://127.0.0.1:9001/',
  },
  devServer: {
    port: 9001,
    headers: {"Access-Control-Allow-Origin": "*"},
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    })
  ]
}