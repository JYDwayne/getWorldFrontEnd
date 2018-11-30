
var path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: 'http://localhost:8007'
  },
  chainWebpack: function (config) {
    console.log(config)
    config.resolve.alias.set('@', resolve('src'))
  }
}
