var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    'index': './src/index.js',
    'popup': './src/popup.js',
  },
  output: {
    path: './dist',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),

    new webpack.optimize.UglifyJsPlugin({
      debug: false,
      minimize: true,
      output: {
        comments: false,
      },
      compressor: {
        warnings: false,
      },
    }),

    new CopyWebpackPlugin([
      {
        context: 'node_modules/semantic-ui/dist',
        from: '*.min.*',
      },
      {
        context: 'node_modules/semantic-ui/dist/themes/default/assets/fonts',
        from: 'icons.*',
        to: 'themes/default/assets/fonts',
      }
    ]),
  ],
};
