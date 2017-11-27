define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('objOf', function() {

  it('creates an object containing a single key:value pair', function() {
    eq(R.objOf('foo', 42), {foo: 42});
    eq(R.objOf('foo')(42), {foo: 42});
  });

});

return module.exports;});
