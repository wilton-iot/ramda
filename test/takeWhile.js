define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var assert = require('assert');

var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('takeWhile', function() {
  it('continues taking elements while the function reports `true`', function() {
    eq(R.takeWhile(function(x) {return x !== 5;}, [1, 3, 5, 7, 9]), [1, 3]);
  });

  it('starts at the right arg and acknowledges undefined', function() {
    eq(R.takeWhile(function() { assert(false); }, []), []);
    eq(R.takeWhile(function(x) {return x !== void 0;}, [1, 3, void 0, 5, 7]), [1, 3]);
  });

  it('is curried', function() {
    var takeUntil7 = R.takeWhile(function(x) {return x !== 7;});
    eq(takeUntil7([1, 3, 5, 7, 9]), [1, 3, 5]);
    eq(takeUntil7([2, 4, 6, 8, 10]), [2, 4, 6, 8, 10]);
  });

});

return module.exports;});
