var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill','./src/index.js'
  ],
  output: {
    path: __dirname+'/public/js',
    publicPath: '/js',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  }
};
