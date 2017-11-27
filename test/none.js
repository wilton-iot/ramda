define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('none', function() {
  var even = function(n) {return n % 2 === 0;};
  var T = function() {return true;};

  it('returns true if no elements satisfy the predicate', function() {
    eq(R.none(even, [1, 3, 5, 7, 9, 11]), true);
  });

  it('returns false if any element satisfies the predicate', function() {
    eq(R.none(even, [1, 3, 5, 7, 8, 11]), false);
  });

  it('returns true for an empty list', function() {
    eq(R.none(T, []), true);
  });

  it('works with more complex objects', function() {
    var xs = [{x: 'abcd'}, {x: 'adef'}, {x: 'fghiajk'}];
    function len3(o) { return o.x.length === 3; }
    function hasA(o) { return o.x.indexOf('a') >= 0; }
    eq(R.none(len3, xs), true);
    eq(R.none(hasA, xs), false);
  });

  it('is curried', function() {
    eq(R.none(even)([1, 3, 5, 6, 7, 9]), false);
  });

});

return module.exports;});
