define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda/..');

var gt10 = x => x > 10;
var even = x => x % 2 === 0;

module.exports = {
  name: 'either',
  tests: {
    'either(gt10, even)(101)': function() {
      R.either(gt10, even)(101);
    },
    'either(gt10)(even)(101)': function() {
      R.either(gt10)(even)(101);
    },
    'either(gt10, even)(8)': function() {
      R.either(gt10, even)(8);
    },
    'either(gt10)(even)(8)': function() {
      R.either(gt10)(even)(8);
    },
    'native gt10(101) || even(101)': function() {
      gt10(101) || even(101);
    },
    'native gt10(8) || even(8)': function() {
      gt10(8) || even(8);
    }
  }
};

return module.exports;});
