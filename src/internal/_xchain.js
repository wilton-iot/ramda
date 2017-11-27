define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var _curry2 = require('ramda/src/internal/_curry2');
var _flatCat = require('ramda/src/internal/_flatCat');
var map = require('ramda/src/map');


module.exports = _curry2(function _xchain(f, xf) {
  return map(f, _flatCat(xf));
});

return module.exports;});
