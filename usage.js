var f = require('./functioner.js');

// greaterThan
var numbers = [0, 1, 2, 3, 4, 5, 6];
var gt3 = numbers.filter(f.gt(3));
// console.log(gt3);

// greaterThanOrEqualTo
var numbers = [0, 1, 2, 3, 4, 5, 6];
var gte3 = numbers.filter(f.gte(3));
// console.log(gte3);

// lessThan
var numbers = [0, 1, 2, 3, 4, 5, 6];
var lt3 = numbers.filter(f.lt(3));
// console.log(lt3);

// lessThanOrEqualTo
var numbers = [0, 1, 2, 3, 4, 5, 6];
var lte3 = numbers.filter(f.lte(3));
// console.log(lte3);

// accessor
var people = [
  {name: 'Alex', sex: 'f'},
  {name: 'Bob', sex: 'm'},
  {name: 'Carla', sex: 'f'},
  {name: 'Dan', sex: 'm'}
];
var names = people.map(f.accessor('name'));
// console.log(names);

// even
var numbers = [0, 1, 2, 3, 4, 5, 6];
var evens = numbers.filter(f.even);
// console.log(evens);

// odd
var numbers = [0, 1, 2, 3, 4, 5, 6];
var odds = numbers.filter(f.odd);
// console.log(odds);
