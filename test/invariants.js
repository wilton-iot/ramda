define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('invariants', function() {

  it('-- applying function f with length n (where n > 0) to no arguments gives function with length n', function() {
    for (var prop in R) {
      if (typeof R[prop] === 'function' && R[prop].length > 0) {
        var result = R[prop]();
        eq(typeof result, 'function');
        eq(result.length, R[prop].length);
      }
    }
  });

  it('-- applying function f with length n (where n > 0) to R.__ gives function with length n', function() {
    for (var prop in R) {
      if (typeof R[prop] === 'function' && R[prop].length > 0) {
        var result = R[prop](R.__);
        eq(typeof result, 'function');
        eq(result.length, R[prop].length);
      }
    }
  });

  it('-- applying function f with length n (where n > 1) to any value other than R.__ gives function with length n - 1', function() {
    var testPartialApplication = function(fn, name) {
      if (fn.length > 1) {
        var result = fn(null);
        eq(typeof result, 'function');
        eq(result.length, fn.length - 1);
        testPartialApplication(result, name + "'");
      }
    };

    for (var prop in R) {
      if (typeof R[prop] === 'function') {
        testPartialApplication(R[prop], prop);
      }
    }
  });

});

return module.exports;});
