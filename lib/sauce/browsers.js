define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var windows = require('ramda/windows');
var apple = require('ramda/apple');
var linux = require('ramda/linux');
var android = require('ramda/android');
var ios = require('ramda/ios');

module.exports = windows.concat(apple, android, ios, linux);

return module.exports;});
