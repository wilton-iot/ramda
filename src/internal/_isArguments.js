define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var _has = require('ramda/src/internal/_has');


module.exports = (function() {
  var toString = Object.prototype.toString;
  return toString.call(arguments) === '[object Arguments]' ?
    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
    function _isArguments(x) { return _has('callee', x); };
}());

require = requireOrig;});
