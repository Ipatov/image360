const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'examples', 'src', 'index.html'),
  filename: 'index.html',
});


module.exports = {
  entry: path.join(__dirname, 'examples', 'src', 'index.js'),

  output: {
    path: path.join(__dirname, 'examples', 'dist'),
    filename: 'bundle.js',
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

  plugins: [htmlWebpackPlugin],

  resolve: {
    extensions: ['.ts', '.js'],
  },

  devServer: {
    port: 4000,
  }
};
