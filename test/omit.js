define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('omit', function() {
  var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};

  it('copies an object omitting the listed properties', function() {
    eq(R.omit(['a', 'c', 'f'], obj), {b: 2, d: 4, e: 5});
  });

  it('includes prototype properties', function() {
    var F = function(param) {this.x = param;};
    F.prototype.y = 40; F.prototype.z = 50;
    var obj = new F(30);
    obj.v = 10; obj.w = 20;
    eq(R.omit(['w', 'x', 'y'], obj), {v: 10, z: 50});
  });

  it('is curried', function() {
    var skipAB = R.omit(['a', 'b']);
    eq(skipAB(obj), {c: 3, d: 4, e: 5, f: 6});
  });

});

return module.exports;});
