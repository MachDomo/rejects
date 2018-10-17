const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './client/src/index.html',
  filename: './index.html',
});

const cleanPlugin = new CleanWebpackPlugin();
const HMR = new webpack.HotModuleReplacementPlugin();
const noErrorsPlugin = new webpack.NoEmitOnErrorsPlugin();

module.exports = {
  mode: 'development',
  entry: ['./client/src/index.js', 'webpack-hot-middleware/client'],
  output: {
    filename: 'main.js',
    path: path.resolve('client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'client/src')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [htmlPlugin, cleanPlugin, HMR, noErrorsPlugin],
};
