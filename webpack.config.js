const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    path.resolve(__dirname, 'src', 'index.html'),
    path.resolve(__dirname, 'src', 'index.js'),
    path.resolve(__dirname, 'src', 'index.sass')
  ],
  module: {
    rules: [
      { test: /\.html$/, use: [ { loader: 'html-loader' } ] },
      { test: /\.sass$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  devtool: 'source-map'
}
