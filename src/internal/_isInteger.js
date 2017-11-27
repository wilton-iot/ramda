define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
module.exports = Number.isInteger || function _isInteger(n) {
  return (n << 0) === n;
};

return module.exports;});
