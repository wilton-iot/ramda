define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var take = require('ramda/src/take');

module.exports = function dropLast(n, xs) {
  return take(n < xs.length ? xs.length - n : 0, xs);
};

return module.exports;});
