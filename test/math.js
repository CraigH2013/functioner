var f = require('../functioner.js').math;

var assert = require('chai').assert;

describe('functioner.math', function() {
  describe('add', function() {
    it('should give expected results', function() {
      assert.equal(f.add(2)(2), 4);
      assert.equal(f.add(0)(1), 1);
      assert.equal(f.add(6)('6'), '66');
    });
  });

  describe('subtract', function() {
    it('should give expected results', function() {
      assert.equal(f.subtract(2)(2), 0);
      assert.equal(f.subtract(1)(3), 2);
    });
  });

  describe('divide', function() {
    it('should give expected results', function() {
      assert.equal(f.divide(2)(2), 1);
      assert.equal(f.divide(1)(3), 3);
      assert.equal(f.divide(3)(1), 1/3);
    });
  });

  describe('multiply', function() {
    it('should give expected results', function() {
      assert.equal(f.multiply(2)(2), 4);
      assert.equal(f.multiply(1)(3), 3);
      assert.equal(f.multiply(0.5)(1), 0.5);
    });
  });

  describe('clamp', function() {
    it('should give expected results', function() {
      assert.equal(f.clamp(3, 6)(4), 4);
      assert.equal(f.clamp(3, 6)(3), 3);
      assert.equal(f.clamp(3, 6)(6), 6);
      assert.equal(f.clamp(3, 6)(0), 3);
      assert.equal(f.clamp(3, 6)(13), 6);
      assert.equal(f.clamp(6, 3)(-1), 3);
    });
  });
});
