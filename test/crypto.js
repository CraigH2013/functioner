var f = require('../functioner.js').crypto;

var assert = require('chai').assert;

describe('functioner.crypto', function() {
  describe('caesar', function() {
    it('should give expected results', function() {
      assert.equal(f.caesar(3)('abc'), 'def');
      assert.equal(f.caesar(3)('abc def'), 'def ghi');
      assert.equal(f.caesar(3)('xyz'), 'abc');
      assert.equal(f.caesar(26)('abc'), 'abc');
      assert.equal(f.caesar(-3)('abc'), 'xyz');
    });
  });
});
