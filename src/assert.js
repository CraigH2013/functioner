'use strict';

var assert = {

  not: function() {
    var args = Array.from(arguments);
    return function(val) {
      for (let i = 0; i < args.length; i++) {
        if (args[i](val) === true) {
          return false;
        }
      }
      return true;
    };
  },

  type: function(t) {
    switch (t) {
      case 'string':
        return function(val) {
          return typeof val === 'string';
        };
      case 'number':
        return function(val) {
          return typeof val === 'number';
        };
      case 'numeric':
        return function(val) {
          return !isNaN(parseFloat(val)) && isFinite(val);
        };
      case 'integer':
      case 'int':
        return function(val) {
          return Number.isInteger(val);
        };
      case 'float':
      case 'decimal':
        return function(val) {
          return typeof val === 'number' && !Number.isInteger(val);
        };
      case 'boolean':
      case 'bool':
        return function(val) {
          return typeof val === 'boolean';
        };
      case 'object':
      case 'obj':
        return function(val) {
          return typeof val === 'object';
        };
      case 'array':
        return function(val) {
          return Array.isArray(val);
        };
      case 'iterable':
        return function(val) {
          if (val === null || val === undefined) {
            return false;
          }
          return typeof val[Symbol.iterator] === 'function';
        };
      case 'error':
        return function(val) {
          return val instanceof Error;
        };
      default:

    }
  },

  greaterThan: function(x) {
    return function(val) {
      return val > x;
    };
  },

  gt: function(x) {
    return assert.greaterThan(x);
  },

  greaterThanOrEqualTo: function(x) {
    return function(val) {
      return val >= x;
    };
  },

  gte: function(x) {
    return assert.greaterThanOrEqualTo(x);
  },

  lessThan: function(x) {
    return function(val) {
      return val < x;
    };
  },

  lt: function(x) {
    return assert.lessThan(x);
  },

  lessThanOrEqualTo: function(x) {
    return function(val) {
      return val <= x;
    };
  },

  lte: function(x) {
    return assert.lessThanOrEqualTo(x);
  },

  equalTo: function(x) {
    return function(val) {
      return val === x;
    };
  },

  eq: function(x) {
    return assert.equalTo(x);
  },

  null: function(x) {
    return x === null;
  },

  undefined: function(x) {
    return x === undefined;
  },

  assigned: function(x) {
    return x !== undefined;
  },

  has: function(prop) {
    return function(obj) {
      return obj.hasOwnProperty(prop);
    };
  },

  includes: function(x) {
    return function(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
          return true;
        }
      }
      return false;
    };
  },

  contains: function(x) {
    return function(string) {
      return string.includes(x);
    };
  },

  match: function(regex) {
    return function(string) {
      return regex.test(string);
    };
  },

  positive: function(x) {
    return x > 0;
  },
  negative: function(x) {
    return x < 0;
  },

  zero: function(x) {
    return x === 0;
  },

  infinity: function(x) {
    return x === Infinity;
  },

  finite: function(x) {
    return x !== Infinity;
  },

  between: function(a, b, inclusive) {
    var min = Math.min(a, b);
    var max = Math.max(a, b);

    if (inclusive === true) {
      return function(val) {
        return min <= val && val <= max;
      };
    } else {
      return function(val) {
        return min < val && val < max;
      };
    }
  },

  even: function(x) {
    return x % 2 === 0;
  },

  odd: function(x) {
    return x % 2 !== 0;
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

module.exports = assert;
