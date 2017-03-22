var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
  entry: './src/app.js',
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
  ],
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        query:{
          presets:['latest']
        }
      },
      {
        test: /\.css$/,
        loader:'style-loader!css-loader'
      }
    ]
    //preset 是babel的一个插件，由于语法每年在变，它用于转换特定的js语法。
  }
}
//chunkhash不同于hash值，是单个文件的版本号
