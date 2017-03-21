module.exports = {
  entry: {
    main: './src/scripts/main.js',
    side: './src/scripts/a.js'
  },
  output: {
    path: './dist',
    filename: '[name]-[chunkhash].js'
  }
}
//chunkhash不同于hash值，是单个文件的版本号
