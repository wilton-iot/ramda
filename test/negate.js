define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('negate', function() {

  it('negates its argument', function() {
    eq(R.negate(-Infinity), Infinity);
    eq(R.negate(-1), 1);
    eq(R.negate(-0), 0);
    eq(R.negate(0), -0);
    eq(R.negate(1), -1);
    eq(R.negate(Infinity), -Infinity);
  });

});

return module.exports;});
