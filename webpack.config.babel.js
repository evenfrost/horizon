import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const [host, port] = ['0.0.0.0', 4000];

export default {
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/dev-server',
    resolve(__dirname, 'client/index'),
  ],
  output: {
    path: resolve(__dirname, 'client'),
    filename: 'bundle.js',
    publicPath: `http://${host}:${port}/`,
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: './client/index.pug',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
    }, {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json',
    }, {
      test: /\.styl$/,
      exclude: /node_modules/,
      // loader: ExtractTextPlugin.extract('style', 'css?sourceMap!stylus?resolve url'),
      loader: 'style!css?sourceMap!stylus?resolve url',
    }, {
      test: /\.css/,
      // loader: ExtractTextPlugin.extract('style', 'css?sourceMap'),
      loader: 'style!css?sourceMap',
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=10000',
    }, {
      test: /\.(jade|pug)$/,
      loader: 'pug',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: resolve(__dirname, 'client'),
  },
  devServer: {
    hot: true,
    port,
    historyApiFallback: {
      index: `http://${host}:${port}/`,
    },
  },
};
