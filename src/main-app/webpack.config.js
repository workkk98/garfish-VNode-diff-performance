const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    })
  ]
}