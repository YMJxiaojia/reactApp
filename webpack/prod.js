const {
  webpack,
  commonsPlugin,
  webpackCommonConfig
} = require('./common')


module.exports = Object.assign(webpackCommonConfig, {
  plugins: [
    ...commonsPlugin,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    })
  ]
})