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

// equalTo
var numbers = [0, 1, 0, 1, 0, 1];
var eq0 = numbers.filter(f.eq(0));
// console.log(eq0);

// add
var numbers = [0, 1, 2, 3, 4, 5, 6];
var add2 = numbers.map(f.add(2));
// console.log(add2);

// subtract
var numbers = [0, 1, 2, 3, 4, 5, 6];
var sub2 = numbers.map(f.subtract(2));
// console.log(sub2);

// divide
var numbers = [1, 2, 3, 4];
var div2 = numbers.map(f.divide(2));
// console.log(div2);

// multiply
var numbers = [0, 1, 2, 3];
var mult5 = numbers.map(f.multiply(5));
// console.log(mult5);

// accessor
var people = [
  {name: 'Alex', sex: 'f'},
  {name: 'Bob', sex: 'm'},
  {name: 'Carla', sex: 'f'},
  {name: 'Dan', sex: 'm'}
];
var names = people.map(f.accessor('name'));
// console.log(names);

// has
var people = [
  {name: 'Alex', sex: 'f'},
  {name: 'Bob', sex: 'm', age: 46},
  {name: 'Carla', sex: 'f'},
  {name: 'Dan', sex: 'm', age: 25}
];
var hasAge = people.filter(f.has('age'));
// console.log(hasAge);

// index
var matrix = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
var firstCol = matrix.map(f.index(0));
// console.log(firstCol);

// includes
var matrix = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
var rowsWith4 = matrix.filter(f.includes(4));
// console.log(rowsWith4);

// contains
var strings = ['hey', 'how', 'are', 'you', 'doing'];
var os = strings.filter(f.contains('o'));
// console.log(os);

// match
var strings = ['hey', 'how', 'are', 'you', 'doing'];
var os = strings.filter(f.match(/.o/));
// console.log(os);

// positive
var numbers = [0, -1, 2, -3, 4, -5, 6];
var positives = numbers.filter(f.positive);
// console.log(positives);

// negative
var numbers = [0, -1, 2, -3, 4, -5, 6];
var negatives = numbers.filter(f.negative);
// console.log(negatives);

// zero
var numbers = [0, -1, 0, -0, 4, -5, 6];
var zeros = numbers.filter(f.zero);
// console.log(zeros);

// infinity
var numbers = [0, 1, 2, 1/0];
var infinites = numbers.filter(f.infinity);
// console.log(infinites);

// finite
var numbers = [0, 1, 2, 1/0];
var finites = numbers.filter(f.finite);
// console.log(finites);

// between
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var between3_7 = numbers.filter(f.between(3, 7));
// console.log(between3_7);

// even
var numbers = [0, 1, 2, 3, 4, 5, 6];
var evens = numbers.filter(f.even);
// console.log(evens);

// odd
var numbers = [0, 1, 2, 3, 4, 5, 6];
var odds = numbers.filter(f.odd);
// console.log(odds);

// caeser
var strings = ['my', 'secret', 'messages'];
var secret = strings.map(f.caesar(13));
// console.log(secret);
