define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var S = require('sanctuary').sanctuary;

var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('partition', function() {
  it('splits a list into two lists according to a predicate', function() {
    var pred = function(n) { return n % 2; };
    eq(R.partition(pred, []), [[], []]);
    eq(R.partition(pred, [0, 2, 4, 6]), [[], [0, 2, 4, 6]]);
    eq(R.partition(pred, [1, 3, 5, 7]), [[1, 3, 5, 7], []]);
    eq(R.partition(pred, [0, 1, 2, 3]), [[1, 3], [0, 2]]);
  });

  it('works with objects', function() {
    var pred = function(n) { return n % 2; };
    eq(R.partition(pred, {}), [{}, {}]);
    eq(R.partition(pred, { a: 0, b: 2, c: 4, d: 6 }),
       [{}, { a: 0, b: 2, c: 4, d: 6 }]);
    eq(R.partition(pred, { a: 1, b: 3, c: 5, d: 7 }),
       [{ a: 1, b: 3, c: 5, d: 7 }, {}]);
    eq(R.partition(pred, { a: 0, b: 1, c: 2, d: 3 }),
       [{ b: 1, d: 3 }, { a: 0, c: 2 }]);
  });

/*
  it('works with other filterables', function() {
    eq(R.partition(R.isEmpty, S.Just(3)),
       [S.Nothing(), S.Just(3)]);
    eq(R.partition(R.complement(R.isEmpty), S.Just(3)),
       [S.Just(3), S.Nothing()]);
  });
*/

  it('is curried', function() {
    var polarize = R.partition(Boolean);
    eq(polarize([true, 0, 1, null]), [[true, 1], [0, null]]);
  });

});

require = requireOrig;});
