define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('binary', function() {
  it('turns multiple-argument function into binary one', function() {
    R.binary(function(x, y, z) {
      eq(arguments.length, 2);
      eq(typeof z, 'undefined');
    })(10, 20, 30);
  });

  it('initial arguments are passed through normally', function() {
    R.binary(function(x, y, z) {
      eq(x, 10);
      eq(y, 20);
      void z;
    })(10, 20, 30);
  });

});

return module.exports;});
