define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var assert = require('assert');

var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('constructN', function() {
  var Circle = function(r) {
    this.r = r;
    this.colors = Array.prototype.slice.call(arguments, 1);
  };
  Circle.prototype.area = function() {return Math.PI * Math.pow(this.r, 2);};

  it('turns a constructor function into a function with n arguments', function() {
    var circle = R.constructN(2, Circle);
    var c1 = circle(1, 'red');
    eq(c1.constructor, Circle);
    eq(c1.r, 1);
    eq(c1.area(), Math.PI);
    eq(c1.colors, ['red']);

    var regex = R.constructN(1, RegExp);
    var pattern = regex('[a-z]');
    eq(pattern.constructor, RegExp);
    eq(pattern.source, '[a-z]');
  });

  it('can be used to create Date object', function() {
    var date = R.constructN(3, Date)(1984, 3, 26);
    eq(date.constructor, Date);
    eq(date.getFullYear(), 1984);
  });

  it('supports constructors with no arguments', function() {
    function Foo() {}
    var foo = R.constructN(0, Foo)();
    eq(foo.constructor, Foo);
  });

  it('does not support constructor with greater than ten arguments', function() {
    assert.throws(function() {
      function Foo($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
        this.eleventh = $10;
      }
      R.constructN(11, Foo);
    }, function(err) {
      return (err instanceof Error &&
              err.message === 'Constructor with greater than ten arguments');
    });
  });

  it('is curried', function() {
    function G(a, b, c) { this.a = a; this.b = b; this.c = c; }
    var construct2 = R.constructN(2);
    eq(typeof construct2, 'function');
    var g2 = construct2(G);
    eq(typeof g2, 'function');
    eq(g2('a', 'b').constructor, G);
    eq(g2('a')('b').constructor, G);
  });

});

return module.exports;});
