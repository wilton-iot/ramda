define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
};

return module.exports;});
