var diet = require('diet'),
  conf = require('./lib/conf');

var app = diet(),
  listenOn = conf.__fullHost

app.listen(listenOn)


app.get('/api/status', function($){
  $.end('STATUS: OK! BUTTS 2');
})

if(conf.useStaticServer){
  app.get('/', function($){
    $.redirect('/index.html');
  });

  publicStatic = require('diet-static')({ path: __dirname+'/public' });
  app.footer(publicStatic);
}
