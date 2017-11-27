define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;
var _isArrayLike = require('ramda/src/internal/_isArrayLike');


describe('until', function() {
  it('applies fn until pred is satisfied', function() {
    eq(R.until(R.gt(R.__, 100), R.multiply(2), 1), 128);
  });

  it('works with lists', function() {
    eq(R.until(R.none(_isArrayLike), R.unnest)([1, [2], [[3]]]), [1, 2, 3]);
  });

  it('ignores fn if predicate is always true', function() {
    eq(R.until(R.T, R.T, false), false);
  });

});

return module.exports;});
