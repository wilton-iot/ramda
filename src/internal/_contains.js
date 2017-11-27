define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var _indexOf = require('ramda/src/internal/_indexOf');


module.exports = function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
};

return module.exports;});
