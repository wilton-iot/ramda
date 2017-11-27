define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('xprod', function() {
  var a = [1, 2];
  var b = ['a', 'b', 'c'];

  it('returns an empty list if either input list is empty', function() {
    eq(R.xprod([], [1, 2, 3]), []);
    eq(R.xprod([1, 2, 3], []), []);
  });

  it('creates the collection of all cross-product pairs of its parameters', function() {
    eq(R.xprod(a, b), [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c']]);
  });

  it('is curried', function() {
    var something = R.xprod(b);
    eq(something(a), [['a', 1], ['a', 2], ['b', 1], ['b', 2], ['c', 1], ['c', 2]]);
  });

  it('correctly reports the arity of curried versions', function() {
    var something = R.xprod(a);
    eq(something.length, 1);
  });

});

return module.exports;});
