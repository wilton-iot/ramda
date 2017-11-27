define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;

describe('isNil', function() {
  it('tests a value for `null` or `undefined`', function() {
    eq(R.isNil(void 0), true);
    eq(R.isNil(null), true);
    eq(R.isNil([]), false);
    eq(R.isNil({}), false);
    eq(R.isNil(0), false);
    eq(R.isNil(''), false);
  });

});

return module.exports;});
