define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
};

return module.exports;});
