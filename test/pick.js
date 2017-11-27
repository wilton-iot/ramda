define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('pick', function() {
  var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, 1: 7};

  it('copies the named properties of an object to the new object', function() {
    eq(R.pick(['a', 'c', 'f'], obj), {a: 1, c: 3, f: 6});
  });

  it('handles numbers as properties', function() {
    eq(R.pick([1], obj), {1: 7});
  });

  it('ignores properties not included', function() {
    eq(R.pick(['a', 'c', 'g'], obj), {a: 1, c: 3});
  });

  it('retrieves prototype properties', function() {
    var F = function(param) {this.x = param;};
    F.prototype.y = 40; F.prototype.z = 50;
    var obj = new F(30);
    obj.v = 10; obj.w = 20;
    eq(R.pick(['w', 'x', 'y'], obj), {w: 20, x: 30, y: 40});
  });

  it('is curried', function() {
    var copyAB = R.pick(['a', 'b']);
    eq(copyAB(obj), {a: 1, b: 2});
  });

});

return module.exports;});
