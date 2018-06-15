define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('splitAt', function() {
  it('splits an array at a given index', function() {
    eq(R.splitAt(1, [1, 2, 3]), [[1], [2, 3]]);
  });

  it('splits a string at a given index', function() {
    eq(R.splitAt(5, 'hello world'), ['hello', ' world']);
  });

  it('is curried', function() {
    var splitAtThree = R.splitAt(3);
    eq(splitAtThree('foobar'), ['foo', 'bar']);
  });

  it('can handle index greater than array length', function() {
    eq(R.splitAt(4, [1, 2]), [[1, 2], []]);
  });

  it('can support negative index', function() {
    eq(R.splitAt(-1, 'foobar'), ['fooba', 'r']);
  });

});

require = requireOrig;});
