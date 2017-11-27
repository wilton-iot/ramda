define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var propEq = require('ramda/..').propEq;

module.exports = {
  name: 'propEq',
  tests: {
    'propEq("value", [1, 2, 3], {value: [1, 2, 3]})': function() {
      propEq('value', [1, 2, 3], {value: [1, 2, 3]});
    }
  }
};

return module.exports;});
