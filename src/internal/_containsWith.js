define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
};

return module.exports;});
