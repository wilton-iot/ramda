define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;

describe('ascend', function() {
  it('builds an ascending comparator function out of the identity function', function() {
    eq([3, 1, 8, 1, 2, 5].sort(R.ascend(R.identity)), [1, 1, 2, 3, 5, 8]);
  });
});

return module.exports;});
