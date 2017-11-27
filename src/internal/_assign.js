define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var _objectAssign = require('ramda/src/internal/_objectAssign');

module.exports =
  typeof Object.assign === 'function' ? Object.assign : _objectAssign;

return module.exports;});
