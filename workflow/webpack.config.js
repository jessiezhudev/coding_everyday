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
    loaders:[
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        query:{
          presets:['latest']
        }
      },
      // 解析从右向左 postcss放在最右
      {
        test: /\.css$/,
        use:[{
          loader: 'style-loader'
        },
          {
            loader: 'css-loader'
          },
          {loader: 'postcss-loader',
          options: {
            plugins: function(){
              return [require('autoprefixer')]
            }
          }
        }
        ]
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader'
      }
    ]
    //preset 是babel的一个插件，由于语法每年在变，它用于转换特定的js语法。
  }
}
//chunkhash不同于hash值，是单个文件的版本号
