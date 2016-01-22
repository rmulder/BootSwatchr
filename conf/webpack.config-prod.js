process.env.BOOTSWATCHR_ENV = 'prod';



var webpack = require('webpack'),
  webpackConf = require('./webpack.config.js');



webpackConf.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));

module.exports = webpackConf;
