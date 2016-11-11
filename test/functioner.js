var f = require('../functioner.js');

var assert = require('chai').assert;

describe('functioner', function() {


  describe('accessor', function() {
    it('should give expected results', function() {

      var obj = {foo: 'foo', bar: 'bar'};

      assert.equal(f.accessor('foo')(obj), 'foo');
    });
  });

  describe('index', function() {
    it('should give expected results', function() {

      var array = [0, 5, 10, 15];

      assert.equal(f.index(1)(array), 5);
    });
  });


});
