var webpack = require('webpack');

var devConfig = require('./webpack.config.dev');

module.exports = Object.assign({} ,devConfig , {
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
});