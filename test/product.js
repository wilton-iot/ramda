define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('product', function() {
  it('multiplies together the array of numbers supplied', function() {
    eq(R.product([1, 2, 3, 4]), 24);
  });

});

return module.exports;});
