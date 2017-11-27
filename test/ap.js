define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('ap', function() {
  function mult2(x) { return x * 2; }
  function plus3(x) { return x + 3; }

  it('interprets [a] as an applicative', function() {
    eq(R.ap([mult2, plus3], [1, 2, 3]), [2, 4, 6, 4, 5, 6]);
  });

  it('interprets ((->) r) as an applicative', function() {
    var f = function(r) {
      return function(a) {
        return r + a;
      };
    };
    var g = function(r) { return r * 2; };
    var h = R.ap(f, g);
    // (<*>) :: (r -> a -> b) -> (r -> a) -> (r -> b)
    // f <*> g = \x -> f x (g x)
    eq(h(10), 10 + (10 * 2));

    eq(R.ap(R.add)(g)(10), 10 + (10 * 2));
  });

  it('dispatches to the passed object\'s ap method when values is a non-Array object', function() {
    var obj = {ap: function(n) { return 'called ap with ' + n; }};
    eq(R.ap(obj, 10), obj.ap(10));
  });

  it('is curried', function() {
    var val = R.ap([mult2, plus3]);
    eq(typeof val, 'function');
    eq(val([1, 2, 3]), [2, 4, 6, 4, 5, 6]);
  });

});

return module.exports;});
