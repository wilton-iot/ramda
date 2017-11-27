define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('append', function() {
  it('adds the element to the end of the list', function() {
    eq(R.append('z', ['x', 'y']), ['x', 'y', 'z']);
    eq(R.append(['a', 'z'], ['x', 'y']), ['x', 'y', ['a', 'z']]);
  });

  it('works on empty list', function() {
    eq(R.append(1, []), [1]);
  });

  it('is curried', function() {
    eq(typeof R.append(4), 'function');
    eq(R.append(1)([4, 3, 2]), [4, 3, 2, 1]);
  });

});

return module.exports;});
