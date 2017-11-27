define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = function _pipeP(f, g) {
  return function() {
    var ctx = this;
    return f.apply(ctx, arguments).then(function(x) {
      return g.call(ctx, x);
    });
  };
};

return module.exports;});
