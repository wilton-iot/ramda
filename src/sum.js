define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var add = require('ramda/src/add');
var reduce = require('ramda/src/reduce');


/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
module.exports = reduce(add, 0);

return module.exports;});
