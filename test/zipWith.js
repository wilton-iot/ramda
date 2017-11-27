define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('zipWith', function() {
  var a = [1, 2, 3];
  var b = [100, 200, 300];
  var c = [10, 20, 30, 40, 50, 60];
  var add = function(a, b) { return a + b; };
  var x = function(a, b) { return a * b; };
  var s = function(a, b) { return a + ' cow ' + b; };
  it('returns an array created by applying its passed-in function pair-wise on its passed in arrays', function() {
    eq(R.zipWith(add, a, b), [101, 202, 303]);
    eq(R.zipWith(x, a, b), [100, 400, 900]);
    eq(R.zipWith(s, a, b), ['1 cow 100', '2 cow 200', '3 cow 300']);
  });

  it('returns an array whose length is equal to the shorter of its input arrays', function() {
    eq(R.zipWith(add, a, c).length, a.length);
  });

});

return module.exports;});
