define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var assert = require('assert');

var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('range', function() {

  it('returns list of numbers', function() {
    eq(R.range(0, 5), [0, 1, 2, 3, 4]);
    eq(R.range(4, 7), [4, 5, 6]);
  });

  it('returns the empty list if the first parameter is not larger than the second', function() {
    eq(R.range(7, 3), []);
    eq(R.range(5, 5), []);
  });

  it('is curried', function() {
    var from10 = R.range(10);
    eq(from10(15), [10, 11, 12, 13, 14]);
  });

  it('returns an empty array if from > to', function() {
    var result = R.range(10, 5);
    eq(result, []);
    result.push(5);
    eq(R.range(10, 5), []);
  });

  it('terminates given bad input', function() {
    assert.throws(
      function() { R.range('a', 'z'); },
      function(err) {
        return err.constructor === TypeError &&
               err.message === 'Both arguments to range must be numbers';
      }
    );
  });

});

require = requireOrig;});
