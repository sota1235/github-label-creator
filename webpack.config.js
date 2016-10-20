var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'index.js',
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
