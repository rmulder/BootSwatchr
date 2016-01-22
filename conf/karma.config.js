// Karma configuration
// Generated on Tue Jan 19 2016 10:30:04 GMT-0700 (Mountain Standard Time)
var opts = {
  basePath: '../',
  frameworks: ['mocha', 'chai'],
  files: [
    'test/**/*.js'
  ],
  exclude: [
    //'node_modules/**/*.*'
  ],
  preprocessors: {},
  reporters: ['progress'],
  port: 9876,
  colors: true,
  autoWatch: false,
  browsers: ['PhantomJS'],
  singleRun: true,
  concurrency: Infinity
};

function setOpts(config){
  opts.logLevel = config.LOG_INFO;
  config.set(opts);
}
setOpts.opts = opts;
module.exports = setOpts;
