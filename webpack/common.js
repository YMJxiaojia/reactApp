const webpack = require('webpack')
const {entry} = require('./entry')
module.exports.webpack = webpack
module.exports.commonsPlugin = [
  new webpack.optimize.CommonsChunkPlugin('common.js')
]
module.exports.webpackCommonConfig = {
  entry,
  output: {
    path: './build',
    filename: '[name].js?[chunkhash]'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css?module&localIdentName=[local]_[hash:base64:10]!less'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}
