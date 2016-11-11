var f = require('../functioner.js');

var assert = require('chai').assert;

describe('functioner', function() {

  describe('type', function() {
    describe('string', function() {
      it('should give expected results', function() {
        assert.equal(f.type('string')('abc'), true);
        assert.equal(f.type('string')(1), false);
        assert.equal(f.type('string')({}), false);
        assert.equal(f.type('string')([1, 2, 3]), false);
      });
    });

    describe('number', function() {
      it('should give expected results', function() {
        assert.equal(f.type('number')('abc'), false);
        assert.equal(f.type('number')(1), true);
        assert.equal(f.type('number')('123'), false);
        assert.equal(f.type('number')([1, 2, 3]), false);
        assert.equal(f.type('number')(1.23), true);
      });
    });

    describe('numeric', function() {
      it('should give expected results', function() {
        assert.equal(f.type('numeric')('abc'), false);
        assert.equal(f.type('numeric')(1), true);
        assert.equal(f.type('numeric')('123'), true);
        assert.equal(f.type('numeric')([1, 2, 3]), false);
        assert.equal(f.type('numeric')(1.23), true);
      });
    });

    describe('integer', function() {
      it('should give expected results', function() {
        assert.equal(f.type('integer')('abc'), false);
        assert.equal(f.type('integer')(1), true);
        assert.equal(f.type('integer')('123'), false);
        assert.equal(f.type('integer')([1, 2, 3]), false);
        assert.equal(f.type('integer')(1.23), false);
      });
    });

    describe('float', function() {
      it('should give expected results', function() {
        assert.equal(f.type('float')('abc'), false);
        assert.equal(f.type('float')(1), false);
        assert.equal(f.type('float')('123'), false);
        assert.equal(f.type('float')('123.45'), false);
        assert.equal(f.type('float')([1, 2, 3]), false);
        assert.equal(f.type('float')(1.23), true);
        assert.equal(f.type('float')(1.0), false);
      });
    });

    describe('boolean', function() {
      it('should give expected results', function() {
        assert.equal(f.type('boolean')('abc'), false);
        assert.equal(f.type('boolean')(1), false);
        assert.equal(f.type('boolean')('123'), false);
        assert.equal(f.type('boolean')('123.45'), false);
        assert.equal(f.type('boolean')([1, 2, 3]), false);
        assert.equal(f.type('boolean')(1.23), false);
        assert.equal(f.type('boolean')(1.0), false);
        assert.equal(f.type('boolean')(true), true);
        assert.equal(f.type('boolean')(false), true);
      });
    });

    describe('object', function() {
      it('should give expected results', function() {
        assert.equal(f.type('object')('abc'), false);
        assert.equal(f.type('object')(1), false);
        assert.equal(f.type('object')('123'), false);
        assert.equal(f.type('object')('123.45'), false);
        assert.equal(f.type('object')([1, 2, 3]), true);
        assert.equal(f.type('object')(1.23), false);
        assert.equal(f.type('object')(1.0), false);
        assert.equal(f.type('object')({}), true);
        assert.equal(f.type('object')(false), false);
      });
    });

    describe('array', function() {
      it('should give expected results', function() {
        assert.equal(f.type('array')('abc'), false);
        assert.equal(f.type('array')(1), false);
        assert.equal(f.type('array')('123'), false);
        assert.equal(f.type('array')('123.45'), false);
        assert.equal(f.type('array')([1, 2, 3]), true);
        assert.equal(f.type('array')(1.23), false);
        assert.equal(f.type('array')(1.0), false);
        assert.equal(f.type('array')({}), false);
        assert.equal(f.type('array')(false), false);
      });
    });

    describe('iterable', function() {
      it('should give expected results', function() {
        assert.equal(f.type('iterable')('abc'), true);
        assert.equal(f.type('iterable')(1), false);
        assert.equal(f.type('iterable')('123'), true);
        assert.equal(f.type('iterable')('123.45'), true);
        assert.equal(f.type('iterable')([1, 2, 3]), true);
        assert.equal(f.type('iterable')(1.23), false);
        assert.equal(f.type('iterable')(1.0), false);
        assert.equal(f.type('iterable')({}), false);
        assert.equal(f.type('iterable')(false), false);
      });
    });

    describe('error', function() {
      it('should give expected results', function() {
        assert.equal(f.type('error')('abc'), false);
        assert.equal(f.type('error')(1), false);
        assert.equal(f.type('error')('123'), false);
        assert.equal(f.type('error')('123.45'), false);
        assert.equal(f.type('error')([1, 2, 3]), false);
        assert.equal(f.type('error')(1.23), false);
        assert.equal(f.type('error')(1.0), false);
        assert.equal(f.type('error')({}), false);
        assert.equal(f.type('error')(false), false);
        assert.equal(f.type('error')(new Error('')), true);
        assert.equal(f.type('error')(Error), false);

      });
    });
  });

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

  describe('equalTo', function() {
    it('should give expected results', function() {
      assert.equal(f.equalTo(0)(0), true);
      assert.equal(f.equalTo(0)(1), false);
    });
  });

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

  describe('accessor', function() {
    it('should give expected results', function() {

      var obj = {foo: 'foo', bar: 'bar'};

      assert.equal(f.accessor('foo')(obj), 'foo');
    });
  });

  describe('has', function() {
    it('should give expected results', function() {

      var obj = {foo: 'foo', bar: 'bar'};

      assert.equal(f.has('bar')(obj), true);
      assert.equal(f.has('baz')(obj), false);
    });
  });

  describe('index', function() {
    it('should give expected results', function() {

      var array = [0, 5, 10, 15];

      assert.equal(f.index(1)(array), 5);
    });
  });

  describe('includes', function() {
    it('should give expected results', function() {

      var array = [0, 5, 10, 15];

      assert.equal(f.includes(10)(array), true);
      assert.equal(f.includes(1)(array), false);
    });
  });

  describe('contains', function() {
    it('should give expected results', function() {

      var string = 'Hello world, my name is...';

      assert.equal(f.contains('world')(string), true);
      assert.equal(f.contains('World')(string), false);
      assert.equal(f.contains('Pablo')(string), false);
    });
  });

  describe('match', function() {
    it('should give expected results', function() {

      var string = 'Hello world, my name is...';

      assert.equal(f.match(/Hello/)(string), true);
      assert.equal(f.match(/[0-9]+/)(string), false);
    });
  });

  describe('positive', function() {
    it('should give expected results', function() {
      assert.equal(f.positive(0), false);
      assert.equal(f.positive(2), true);
      assert.equal(f.positive(-3), false);
    });
  });

  describe('negative', function() {
    it('should give expected results', function() {
      assert.equal(f.negative(0), false);
      assert.equal(f.negative(2), false);
      assert.equal(f.negative(-3), true);
    });
  });

  describe('infinity', function() {
    it('should give expected results', function() {
      assert.equal(f.infinity(0), false);
      assert.equal(f.infinity(2), false);
      assert.equal(f.infinity(1/0), true);
    });
  });

  describe('finite', function() {
    it('should give expected results', function() {
      assert.equal(f.finite(0), true);
      assert.equal(f.finite(1/3), true);
      assert.equal(f.finite(1/0), false);
    });
  });

  describe('between', function() {
    it('should give expected results', function() {
      assert.equal(f.between(0, 1)(0.5), true);
      assert.equal(f.between(1, 0)(0.5), true);
      assert.equal(f.between(1, 0)(1), false);
      assert.equal(f.between(0, 1, true)(1), true);
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
