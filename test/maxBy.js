define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('maxBy', function() {

  it('returns the larger value as determined by the function', function() {
    eq(R.maxBy(function(n) { return n * n; }, -3, 2), -3);
    eq(R.maxBy(R.prop('x'), {x: 3, y: 1}, {x: 5, y: 10}), {x: 5, y: 10});
  });

});

return module.exports;});
