var diet = require('diet'),
  conf = require('./lib/conf'),
  publicStatic = require('diet-static')({ path: __dirname+'/public' })

var app = diet(),
  listenOn = conf.listenHost != ''? conf.listenHost + ':' + conf.listenPort : conf.listenPort;

app.listen(listenOn)

app.get('/', function($){
  $.redirect('/index.html');
});

app.footer(publicStatic);
