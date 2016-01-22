var validEnvs = ['prod'];

var envSetTo = process.env.BOTTSWATCHR_ENV;

if(envSetTo && validEnvs.indexOf(envSetTo.toLowerCase()) < 0){
  envSetTo = '';
}

var loadableConfig = '../conf/server-config' + (!envSetTo || envSetTo == ''? '' : '-'+envSetTo) + '.js';

var conf = require(loadableConfig);

conf.__fullHost = conf.listenHost != ''? conf.listenHost + ':' + conf.listenPort : conf.listenPort

module.exports = conf;
