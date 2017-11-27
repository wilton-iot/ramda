define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
;(function() {

  'use strict';

  /* global R */
  /* eslint-env amd */

  /* TEST_ENTRY_POINT */

  if (typeof exports === 'object') {
    module.exports = R;
  } else if (typeof define === 'function' && define.amd) {
    define(function() { return R; });
  } else {
    this.R = R;
  }

}.call(this));

return module.exports;});
