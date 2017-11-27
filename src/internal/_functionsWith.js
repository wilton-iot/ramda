define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var _filter = require('ramda/src/internal/_filter');


/**
 * @private
 * @param {Function} fn The strategy for extracting function names from an object
 * @return {Function} A function that takes an object and returns an array of function names.
 */
module.exports = function _functionsWith(fn) {
  return function(obj) {
    return _filter(function(key) { return typeof obj[key] === 'function'; }, fn(obj));
  };
};

return module.exports;});
