define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
};

return module.exports;});
