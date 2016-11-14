'use strict';

var math = {

  add: function(x) {
    return function(val) {
      return val + x;
    };
  },

  subtract: function(x) {
    return function(val) {
      return val - x;
    };
  },

  divide: function(x) {
    return function(val) {
      return val / x;
    };
  },

  multiply: function(x) {
    return function(val) {
      return val * x;
    };
  },

  pow: function(exp) {
    return function(base) {
      return Math.pow(base, exp);
    };
  },

  sum: function(fn) {
    return function(n0, n) {
      var total = 0;
      for (let i = n0; i < n; i++) {
        total += fn(i);
      }
      return total;
    };
  },

  scale: function(inMin, inMax, outMin, outMax) {
    return function(x) {
      return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };
  },

  clamp: function(a, b) {
    var min = Math.min(a, b);
    var max = Math.max(a, b);

    return function(val) {
      return Math.max(min, Math.min(val, max));
    };
  },

  compose: function() {
    var fns = Array.from(arguments);
    return function(val) {
      for (let i = fns.length - 1; i >= 0; i--) {
        val = fns[i](val);
      }
      return val;
    };
  },

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

module.exports = math;
