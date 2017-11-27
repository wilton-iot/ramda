define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
};

return module.exports;});
