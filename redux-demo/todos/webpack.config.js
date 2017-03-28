// var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
module.exports = {
   //source map的默认配置
   devtool: 'cheap-module-eval-source-map',
   //热加载
   entry: [
     'webpack-hot-middleware/client',
     './index'
   ],
   output:{
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js",
      publicPath: '/static/'
   },
   plugins:[
     new webpack.optimize.OccurenceOrderPlugin(),
     new webpack.HotModuleReplacementPlugin()
   ],
   module: {
     rules: [
       {
         test: /\.html$/,
         loader: 'html-loader'
       },
       {
         test: /\.js$/,
         exclude: path.resolve(__dirname, 'node_modules'),
         loader: 'babel-loader?presets[]=env'
       }
     ]
   }
}
