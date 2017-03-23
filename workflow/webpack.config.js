var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body',
      title: 'web app'
    })
  ],
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
        use:[
          {
            loader: 'babel-loader',
            query: {
              presets: 'latest'
            }
          }
        ]
      },
      {
        test: /\.tpl$/,
        use: 'ejs-loader'
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 70000,
              name: 'assets/[name]-[hash:5].[ext]'
            }
          }
        ]
      }
    ]
    //preset 是babel的一个插件，由于语法每年在变，它用于转换特定的js语法。
  }
}
//chunkhash不同于hash值，是单个文件的版本号
