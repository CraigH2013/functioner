var f = require('../functioner.js');

var assert = require('chai').assert;

describe('functioner', function() {

  describe('greaterThan', function() {
    it('should give expected results', function() {
      assert.equal(f.greaterThan(0)(1), true);
      assert.equal(f.greaterThan(0)(-1), false);
      assert.equal(f.greaterThan(0)(0), false);
    });
  });

  describe('greaterThanOrEqualTo', function() {
    it('should give expected results', function() {
      assert.equal(f.greaterThanOrEqualTo(0)(1), true);
      assert.equal(f.greaterThanOrEqualTo(0)(-1), false);
      assert.equal(f.greaterThanOrEqualTo(0)(0), true);
    });
  });

  describe('lessThan', function() {
    it('should give expected results', function() {
      assert.equal(f.lessThan(0)(1), false);
      assert.equal(f.lessThan(0)(-1), true);
      assert.equal(f.lessThan(0)(0), false);
    });
  });

  describe('lessThanOrEqualTo', function() {
    it('should give expected results', function() {
      assert.equal(f.lessThanOrEqualTo(0)(1), false);
      assert.equal(f.lessThanOrEqualTo(0)(-1), true);
      assert.equal(f.lessThanOrEqualTo(0)(0), true);
    });
  });

  describe('accessor', function() {
    it('should give expected results', function() {

      var obj = {foo: 'foo', bar: 'bar'};

      assert.equal(f.accessor('foo')(obj), 'foo');
    });
  });

  describe('even', function() {
    it('should give expected results', function() {
      assert.equal(f.even(0), true);
      assert.equal(f.even(2), true);
      assert.equal(f.even(3), false);
    });
  });

  describe('odd', function() {
    it('should give expected results', function() {
      assert.equal(f.odd(3), true);
      assert.equal(f.odd(2), false);
      assert.equal(f.odd(0), false);
    });
  });
});
