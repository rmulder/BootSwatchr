process.env.BOOTSWATCHR_ENV = 'prod';



var webpackConf = require('./webpack.config.js');



webpackConf.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
