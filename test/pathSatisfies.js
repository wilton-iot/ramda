define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('pathSatisfies', function() {

  var isPositive = function(n) { return n > 0; };

  it('returns true if the specified object path satisfies the given predicate', function() {
    eq(R.pathSatisfies(isPositive, ['x', 1, 'y'], {x: [{y: -1}, {y: 1}]}), true);
  });

  it('returns false if the specified path does not exist', function() {
    eq(R.pathSatisfies(isPositive, ['x', 'y'], {x: {z: 42}}), false);
  });

  it('returns false if the path is empty', function() {
    eq(R.pathSatisfies(isPositive, [], {x: {z: 42}}), false);
  });

  it('returns false otherwise', function() {
    eq(R.pathSatisfies(isPositive, ['x', 'y'], {x: {y: 0}}), false);
  });

});

return module.exports;});
