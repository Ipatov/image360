const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const htmlWebpackPlugin = new HtmlPlugin({
  template: path.join(__dirname, 'examples', 'src', 'index.html'),
  filename: 'index.html',
});

const copyPlugin = new CopyPlugin([
  {
    from: path.join(__dirname, 'examples', 'src', 'JPEG'),
    to: path.join(__dirname, 'examples', 'dist', 'JPEG'),
  }
]);


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

  plugins: [
    copyPlugin,
    htmlWebpackPlugin,
  ],

  resolve: {
    extensions: ['.ts', '.js'],
  },

  devServer: {
    port: 4000,
  }
};
