define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('F', function() {
  it('always returns false', function() {
    eq(R.F(), false);
    eq(R.F(10), false);
    eq(R.F(true), false);
  });

});

return module.exports;});
