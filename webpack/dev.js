const {
  commonsPlugin,
  webpackCommonConfig
} = require('./common')

module.exports = Object.assign(webpackCommonConfig, {
  plugins: [
    ...commonsPlugin
  ]
})