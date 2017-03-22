var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/app.js'
  output: {
    path: './dist',
    filename: 'js/[name].bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
//chunkhash不同于hash值，是单个文件的版本号
