define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('type', function() {

  it('"Array" if given an array literal', function() {
    eq(R.type([1, 2, 3]), 'Array');
  });

  // it('"Arguments" if given an arguments object', function() {
  //   var args = (function() { return arguments; }());
  //   eq(R.type(args), 'Arguments');
  // });

  it('"Object" if given an object literal', function() {
    eq(R.type({batman: 'na na na na na na na'}), 'Object');
  });

  it('"RegExp" if given a RegExp literal', function() {
    eq(R.type(/[A-z]/), 'RegExp');
  });

  it('"Number" if given a numeric value', function() {
    eq(R.type(4), 'Number');
  });

  it('"Number" if given the NaN value', function() {
    eq(R.type(NaN), 'Number');
  });

  it('"String" if given a String literal', function() {
    eq(R.type('Gooooodd Mornning Ramda!!'), 'String');
  });

  it('"String" if given a String object', function() {
    eq(R.type(new String('I am a String object')), 'String');
  });

  it('"Null" if given the null value', function() {
    eq(R.type(null), 'Null');
  });

  it('"Undefined" if given the undefined value', function() {
    eq(R.type(undefined), 'Undefined');
  });

});

return module.exports;});
