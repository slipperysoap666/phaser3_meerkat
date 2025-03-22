const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry: './main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
        directory: path.join(__dirname, './'),
        watch: true
    }
},
  plugins: [new HtmlWebpackPlugin(
    {
      title: 'phaser3-start',
      template: 'index.html'
    })]
};
