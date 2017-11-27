define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('forEachObjIndexed', function() {
  var obj = { x: 1, y: 2, z: 123 };

  it('performs the passed in function on each key and value of the object', function() {
    var sideEffect = {};
    R.forEachObjIndexed(function(value, key) { sideEffect[key] = value; }, obj);
    eq(sideEffect, obj);
  });

  it('returns the original object', function() {
    var s = '';
    eq(R.forEachObjIndexed(function(value) { s += value; }, obj), obj);
    eq('12123', s);
  });

  it('is curried', function() {
    var xStr = '';
    var xe = R.forEachObjIndexed(function(v) { xStr += (v + ' '); });
    eq(typeof xe, 'function');
    xe(obj);
    eq(xStr, '1 2 123 ');
  });

});

return module.exports;});
