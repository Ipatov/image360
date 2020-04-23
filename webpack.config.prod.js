const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'lib.cdn.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
