const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    compress: false,
    port: 8080
  }
};