var Coffee = require('./coffee-script');

exports.translate = function(load) {
  var output = Coffee.compile(load.source, {
    sourceMap: true,
    bare: true
  });
  load.source = output.js;
  load.metadata.sourceMap = JSON.parse(output.v3SourceMap);
};
