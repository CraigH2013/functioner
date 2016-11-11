var functioner = {
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
  accessor: function(access) {
    return function(obj) {
      return obj[access];
    };
  },
  even: function(x) {
    return x % 2 === 0;
  },
  odd: function(x) {
    return x % 2 !== 0;
  }
};

module.exports = functioner;
