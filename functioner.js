'use strict';

var functioner = {

  assert: require('./src/assert.js'),
  crypto: require('./src/crypto.js'),
  math: require('./src/math.js'),

  accessor: function(access) {
    return function(obj) {
      return obj[access];
    };
  },
  
  index: function(i) {
    return function(arr) {
      return arr[i];
    };
  },

  print: function(val) {
    console.log(val);
  }
};

module.exports = functioner;
