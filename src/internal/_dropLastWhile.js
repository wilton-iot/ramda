define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = function dropLastWhile(pred, list) {
  var idx = list.length - 1;
  while (idx >= 0 && pred(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, 0, idx + 1);
};

return module.exports;});
