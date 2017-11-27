define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('valuesIn', function() {
  var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
  function C() { this.a = 100; this.b = 200; }
  C.prototype.x = function() { return 'x'; };
  C.prototype.y = 'y';
  var cobj = new C();

  it("returns an array of the given object's values", function() {
    var vs = R.valuesIn(obj);
    eq(vs.length, 6);
    eq(R.indexOf(100, vs) >= 0, true);
    eq(R.indexOf('D', vs) >= 0, true);
    eq(R.indexOf(null, vs) >= 0, true);
    eq(R.indexOf(undefined, vs) >= 0, true);
    eq(R.indexOf(obj.b, vs) >= 0, true);
    eq(R.indexOf(obj.c, vs) >= 0, true);
  });

  it("includes the given object's prototype properties", function() {
    var vs = R.valuesIn(cobj);
    eq(vs.length, 4);
    eq(R.indexOf(100, vs) >= 0, true);
    eq(R.indexOf(200, vs) >= 0, true);
    eq(R.indexOf(cobj.x, vs) >= 0, true);
    eq(R.indexOf('y', vs) >= 0, true);
  });

  it('works for primitives', function() {
    var result = R.map(function(val) {
      return R.valuesIn(val);
    }, [null, undefined, 55, '', true, false, NaN, Infinity, , []]);
    eq(result, R.repeat([], 10));
  });

});

return module.exports;});
