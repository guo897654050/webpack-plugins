const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const No1Webpackplugin = require('./plugins/No1WebpackPlugin');
const No2Webpackplugin = require('./plugins/No2WebpackPlugin');
const FileListPlugin = require('./plugins/FileListPlugin');
const WatchPlugin = require('./plugins/WatchPlugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'customer-plugin'
    }),
    new CleanWebpackPlugin(),
    // new No1Webpackplugin({ msg: 'msg from webapck no1 plugin' })
    new No2Webpackplugin({ msg: 'bad boy!' }),
    new FileListPlugin(),
    // new WatchPlugin()
  ]
}