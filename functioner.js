'use strict';

var functioner = {
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
    return functioner.greaterThan(x);
  },
  greaterThanOrEqualTo: function(x) {
    return function(val) {
      return val >= x;
    };
  },
  gte: function(x) {
    return functioner.greaterThanOrEqualTo(x);
  },
  lessThan: function(x) {
    return function(val) {
      return val < x;
    };
  },
  lt: function(x) {
    return functioner.lessThan(x);
  },
  lessThanOrEqualTo: function(x) {
    return function(val) {
      return val <= x;
    };
  },
  lte: function(x) {
    return functioner.lessThanOrEqualTo(x);
  },
  equalTo: function(x) {
    return function(val) {
      return val === x;
    };
  },
  eq: function(x) {
    return functioner.equalTo(x);
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
  accessor: function(access) {
    return function(obj) {
      return obj[access];
    };
  },
  has: function(prop) {
    return function(obj) {
      return obj.hasOwnProperty(prop);
    };
  },
  index: function(i) {
    return function(arr) {
      return arr[i];
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
  caesar: function(x) {
    if (x < 0) {
      x = x + 26;
    }
    return function(string) {
      var output = '';

      Array.from(string).forEach(char => {
        if (char.match(/[a-z]/i)) {
          var code = char.charCodeAt(0);

          if (code >= 65 && code <= 90) {
            char = String.fromCharCode(((code - 65 + x) % 26) + 65);
          } else if (code >= 97 && code <= 122) {
            char = String.fromCharCode(((code - 97 + x) % 26) + 97);
          }
        }

        output +=  char;
      });

      return output;
    };
  },
  clamp: function(a, b) {
    var min = Math.min(a, b);
    var max = Math.max(a, b);

    return function(val) {
      return Math.max(min, Math.min(val, max));
    };
  },
  scale: function(inMin, inMax, outMin, outMax) {
    return function(x) {
      return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };
  },
  sum: function(fn) {
    return function(n) {
      var total = 0;
      for (let i = 0; i < n; i++) {
        total += fn(i);
      }
      return total;
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
  pow: function(exp) {
    return function(base) {
      return Math.pow(base, exp);
    };
  },
  print: function(val) {
    console.log(val);
  }
};

module.exports = functioner;
