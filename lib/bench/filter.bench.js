define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var filter = require('ramda/..').filter;

var nums = [8, 2, 85, 2, 34, 3, 23, 247, 57, 8, 0, 6, 5, 46, 54, 643];
function isEven(x) { return x % 2 === 0; }
var filterEven = filter(isEven);

module.exports = {
  name: 'filter',
  tests: {
    'filter(isEven, nums)': function() {
      filter(isEven, nums);
    },
    'filter(isEven)(nums)': function() {
      filter(isEven)(nums);
    },
    'filterEven(nums)': function() {
      filterEven(nums);
    },
    'native filter': function() {
      nums.filter(isEven);
    }
  }
};

return module.exports;});
