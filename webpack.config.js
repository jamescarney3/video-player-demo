module.exports = {
  entry: './app/index.js',
  output: {
    path: './build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(html|mp4|vtt|jpg)$/,
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
    ],
  },
};
