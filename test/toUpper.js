define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('toUpper', function() {
  it('returns the upper-case equivalent of the input string', function() {
    eq(R.toUpper('abc'), 'ABC');
  });

});

return module.exports;});
