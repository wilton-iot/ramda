define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var assert = require('assert');

var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('flatten', function() {
  it('turns a nested list into one flat list', function() {
    var nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
    eq(R.flatten(nest), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    nest = [[[[3]], 2, 1], 0, [[-1, -2], -3]];
    eq(R.flatten(nest), [3, 2, 1, 0, -1, -2, -3]);
    eq(R.flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });

  it('is not destructive', function() {
    var nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
    assert.notStrictEqual(R.flatten(nest), nest);
  });

/* // slow in duktape
  it('handles ridiculously large inputs', function() {
    //this.timeout(10000);
    eq(R.flatten([new Array(1000000), R.range(0, 56000), 5, 1, 3]).length, 1056003);
  });
*/

  it('handles array-like objects', function() {
    var o = {length: 3, 0: [1, 2, [3]], 1: [], 2: ['a', 'b', 'c', ['d', 'e']]};
    eq(R.flatten(o), [1, 2, 3, 'a', 'b', 'c', 'd', 'e']);
  });

  it('flattens an array of empty arrays', function() {
    eq(R.flatten([[], [], []]), []);
    eq(R.flatten([]), []);
  });

});

return module.exports;});
