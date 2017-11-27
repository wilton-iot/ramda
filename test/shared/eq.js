define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var assert = require('assert');

var R = require('ramda');


module.exports = function(actual, expected) {
  assert.strictEqual(arguments.length, 2);
  assert.strictEqual(R.toString(actual), R.toString(expected));
};

return module.exports;});
