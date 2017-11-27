define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var _has = require('ramda/src/internal/_has');


module.exports = (function() {
  var toString = Object.prototype.toString;
  return toString.call(arguments) === '[object Arguments]' ?
    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
    function _isArguments(x) { return _has('callee', x); };
}());

return module.exports;});
