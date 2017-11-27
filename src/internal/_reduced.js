define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x :
    {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
};

return module.exports;});
