define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('without', function() {
  it('returns an array not containing values in the first argument', function() {
    eq(R.without([1, 2], [1, 2, 1, 4, 5]), [4, 5]);
  });

  it('is curried', function() {
    var withoutOnes = R.without([1]);
    eq(withoutOnes([1, 2, 3, 5, 1]), [2, 3, 5]);
  });

  it('can act as a transducer', function() {
    eq(R.into([], R.without([1]), [1]), []);
  });

  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };

    eq(R.without([0], [-0]).length, 1);
    eq(R.without([-0], [0]).length, 1);
    eq(R.without([NaN], [NaN]).length, 0);
    eq(R.without([[1]], [[1]]).length, 0);
    eq(R.without([new Just([42])], [new Just([42])]).length, 0);
  });
});

return module.exports;});
