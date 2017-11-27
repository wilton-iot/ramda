define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var _curry1 = require('ramda/src/internal/_curry1');


/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
module.exports = _curry1(function negate(n) { return -n; });

return module.exports;});
