define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var _curry1 = require('ramda/src/internal/_curry1');
var _isArguments = require('ramda/src/internal/_isArguments');
var _isArray = require('ramda/src/internal/_isArray');
var _isObject = require('ramda/src/internal/_isObject');
var _isString = require('ramda/src/internal/_isString');


/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty` and/or
 * `<Type>.prototype.empty`.
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
module.exports = _curry1(function empty(x) {
  return (
    (x != null && typeof x['fantasy-land/empty'] === 'function') ?
      x['fantasy-land/empty']() :
    (x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function') ?
      x.constructor['fantasy-land/empty']() :
    (x != null && typeof x.empty === 'function') ?
      x.empty() :
    (x != null && x.constructor != null && typeof x.constructor.empty === 'function') ?
      x.constructor.empty() :
    _isArray(x) ?
      [] :
    _isString(x) ?
      '' :
    _isObject(x) ?
      {} :
    _isArguments(x) ?
      (function() { return arguments; }()) :
    // else
      void 0
  );
});

return module.exports;});
