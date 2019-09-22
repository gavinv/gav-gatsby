var sass = require('node-sass');
sass.render({
  importer: require('node-sass-glob'),
}, function (err, output) { });
