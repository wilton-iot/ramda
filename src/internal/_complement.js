define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
};

return module.exports;});
