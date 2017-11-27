define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = {
  init: function() {
    return this.xf['@@transducer/init']();
  },
  result: function(result) {
    return this.xf['@@transducer/result'](result);
  }
};

return module.exports;});
