var path = require('path'),
  basename = path.basename,
  dirname = path.dirname,
  extname = path.extname,
  MarkdownIt = require('markdown-it');

function isMd(file){
  return /\.md|\.markdown/.test(extname(file));
}

function plugin(options){
  options = options || {};
  var keys = options.keys || [];

  return function(files, metalsmith, done){
    setImmediate(done);
    var md = new MarkdownIt(options);
    Object.keys(files).forEach(function(file){
      if (!isMd(file)){
        return;
      }
      var data = files[file],
        dir = dirname(file),
        html = basename(file, extname(file)) + '.html';
      if ('.' != dir){
        html = dir + '/' + html;
      }

      var str = md.render(data.contents.toString());
      data.contents = new Buffer(str);
      keys.forEach(function(key) {
        data[key] = md.render(data[key]);
      });

      delete files[file];
      files[html] = data;
    });
  };
}


module.exports = plugin;
