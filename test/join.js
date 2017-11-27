define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('join', function() {
  it("concatenates a list's elements to a string, with an separator string between elements", function() {
    var list = [1, 2, 3, 4];
    eq(R.join('~', list), '1~2~3~4');
  });

});

return module.exports;});
