define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var _forceReduced = require('ramda/src/internal/_forceReduced');
var _isArrayLike = require('ramda/src/internal/_isArrayLike');
var _reduce = require('ramda/src/internal/_reduce');
var _xfBase = require('ramda/src/internal/_xfBase');

module.exports = (function() {
  var preservingReduced = function(xf) {
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return xf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        var ret = xf['@@transducer/step'](result, input);
        return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
      }
    };
  };

  return function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return rxf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
      }
    };
  };
}());

return module.exports;});
