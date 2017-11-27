define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('reverse', function() {

  it('reverses arrays', function() {
    eq(R.reverse([]), []);
    eq(R.reverse([1]), [1]);
    eq(R.reverse([1, 2]), [2, 1]);
    eq(R.reverse([1, 2, 3]), [3, 2, 1]);
  });

  it('reverses strings', function() {
    eq(R.reverse(''), '');
    eq(R.reverse('a'), 'a');
    eq(R.reverse('ab'), 'ba');
    eq(R.reverse('abc'), 'cba');
  });

});

return module.exports;});
