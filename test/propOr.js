define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('propOr', function() {
  var fred = {name: 'Fred', age: 23};
  var anon = {age: 99};

  var nm = R.propOr('Unknown', 'name');

  it('returns a function that fetches the appropriate property', function() {
    eq(typeof nm, 'function');
    eq(nm(fred), 'Fred');
  });

  it('returns the default value when the property does not exist', function() {
    eq(nm(anon), 'Unknown');
  });

  it('returns the default value when the object is nil', function() {
    eq(nm(null), 'Unknown');
    eq(nm(void 0), 'Unknown');
  });

  it('does not return properties from the prototype chain', function() {
    var Person = function() {};
    Person.prototype.age = function() {};

    var bob = new Person();
    eq(R.propOr(100, 'age', bob), 100);
  });

});

return module.exports;});
