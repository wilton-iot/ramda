define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('dropWhile', function() {
  it('skips elements while the function reports `true`', function() {
    eq(R.dropWhile(function(x) {return x < 5;}, [1, 3, 5, 7, 9]), [5, 7, 9]);
  });

  it('returns an empty list for an empty list', function() {
    eq(R.dropWhile(function() { return false; }, []), []);
    eq(R.dropWhile(function() { return true; }, []), []);
  });

  it('starts at the right arg and acknowledges undefined', function() {
    var sublist = R.dropWhile(function(x) {return x !== void 0;}, [1, 3, void 0, 5, 7]);
    eq(sublist.length, 3);
    eq(sublist[0], void 0);
    eq(sublist[1], 5);
    eq(sublist[2], 7);
  });

  it('is curried', function() {
    var dropLt7 = R.dropWhile(function(x) {return x < 7;});
    eq(dropLt7([1, 3, 5, 7, 9]), [7, 9]);
    eq(dropLt7([2, 4, 6, 8, 10]), [8, 10]);
  });

});

return module.exports;});
