var webpack = require('webpack');

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
  ],
};
