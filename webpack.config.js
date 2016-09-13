const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: './build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(html|vtt|jpg)$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};
