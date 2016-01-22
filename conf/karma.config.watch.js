var karmaConf = require('./karma.config').opts;

karmaConf.autoWatch = true;
karmaConf.singleRun = false;

module.exports = function(config) {
  config.set(karmaConf)
};
