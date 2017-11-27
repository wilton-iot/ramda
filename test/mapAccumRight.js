define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('mapAccumRight', function() {
  var add = function(a, b) {return [a + b, a + b];};
  var mult = function(a, b) {return [a * b, a * b];};

  it('map and accumulate simple functions over arrays with the supplied accumulator', function() {
    eq(R.mapAccumRight(add, 0, [1, 2, 3, 4]), [[10, 9, 7, 4], 10]);
    eq(R.mapAccumRight(mult, 1, [1, 2, 3, 4]), [[24, 24, 12, 4], 24]);
  });

  it('returns the list and accumulator for an empty array', function() {
    eq(R.mapAccumRight(add, 0, []), [[], 0]);
    eq(R.mapAccumRight(mult, 1, []), [[], 1]);
    eq(R.mapAccumRight(R.concat, [], []), [[], []]);
  });

  it('is curried', function() {
    var addOrConcat = R.mapAccumRight(add);
    var sum = addOrConcat(0);
    var cat = addOrConcat('');
    eq(sum([1, 2, 3, 4]), [[10, 9, 7, 4], 10]);
    eq(cat(['1', '2', '3', '4']), [['1234', '234', '34', '4'], '1234']);
  });

  it('correctly reports the arity of curried versions', function() {
    var sum = R.mapAccumRight(add, 0);
    eq(sum.length, 1);
  });

});

return module.exports;});
