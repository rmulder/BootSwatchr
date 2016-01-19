var validEnvs = ['prod'];

var envSetTo = process.env.BOTTSWATCHR_ENV;

if(envSetTo && validEnvs.indexOf(envSetTo.toLowerCase()) < 0){
  envSetTo = '';
}

var loadableConfig = '../conf/server-config' + (!envSetTo || envSetTo == ''? '' : '-'+envSetTo) + '.js'

module.exports = require(loadableConfig);
