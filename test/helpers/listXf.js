define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = {
  '@@transducer/init': function() { return []; },
  '@@transducer/step': function(acc, x) { return acc.concat([x]); },
  '@@transducer/result': function(x) { return x; }
};

return module.exports;});
