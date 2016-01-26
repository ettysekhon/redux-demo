var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client',
      './src/client/entry'
    ]
  },
  resolve: {
    root: [
      path.resolve('./src')
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css|\.styl$/, // Only .css files
      loader: 'style!css!stylus-loader' // Run both loaders
    }, {
      test: /\.html$/,
      loaders: ['react-templates-loader?targetVersion=0.14.0']
    }]
  }
};
