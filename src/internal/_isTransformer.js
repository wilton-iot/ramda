define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};

return module.exports;});
