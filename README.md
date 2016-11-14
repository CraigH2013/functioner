# functioner
A Node.js module containing a set of higher order functions

*functioner* is a library mainly focused on higher-order functions, like the `map`, `filter`, and `forEach` functions used on arrays.

This functional programming methodology can be more easily embraced with a large set of higher-order functions allowing more compact anonymous function creation.

*functioner* contains a set of assertion functions, a lot like other libraries; however, these functions are higher-order which allows for unique usage in modules like [dependon](https://www.npmjs.com/package/dependon).

## Install
```bash
$ npm install functioner
```

## Usage

### assert
```javascript
var f = require('functioner').assert;
```

```javascript
var numbers = [0, 1, 2, 3, 4, 5];

var lessThan3 = numbers.filter(f.lessThan(3));
//    => [ 0, 1, 2 ]

var odds = numbers.filter(f.odd);
//    => [1, 3, 5]

var between1and4 = numbers.filter(f.between(1, 4));
//    => [2, 3]
```

```javascript
var types = [1, 'abc', {}, [1,2,3], false];

var iters = types.filter(f.type('iterable'));
//    => [ 'abc', [ 1, 2, 3 ] ]
```

+ `type(string)`: returns a function that checks the types variables given to the function.
+ `greaterThan(number)`: returns a function that checks if a number is greater than the original number given.
+ `gt(number)`: short notation for greaterThan
+ `greaterThanOrEqualTo(number)`: returns a function that checks if a number is greater than or equal to the original number given.
+  `gte(number)`: short notation for greaterThanOrEqualTo
+ `lessThan(number)`: returns a function that checks if a number is less than the original number given.
+ `lt(number)`: short notation for lessThan
+ `lessThanOrEqualTo(number)`: returns a function that checks if a number is less than or equal to the original number given.
+ `lte(number)`: short notation for lessThanOrEqualTo
+ `equalTo(value)`: returns a function that checks if a given value is equal to the original.
+ `eq(value)`: short notation for equalTo
+ `null(value)`: returns `true` if value equals null, `false` otherwise.
+ `undefined(value)`: returns `true` if value equals undefined, `false` otherwise.
+ `assigned(value)`: returns `true` if value does not equal undefined, `false` otherwise.
+ `has(prop)`: returns a function that returns `true` if a given object has the property initially given.
+ `includes(value)`: returns a function that returns `true` if a given array has the value initially specified.
+ `contains(substring)`: returns a function that returns `true` if a given string has the substring initially given.
+ `match(regex)`: returns a function that returns `true` if a given string matches a given regular expression.
+ `positive(number)`: returns `true` if value is greater than 0, `false` otherwise.
+ `negative(number)`: returns `true` if value is less than 0, `false` otherwise.
+ `zero(number)`: returns `true` if value is equal to 0, `false` otherwise.
+ `infinity(number)`: returns `true` if value is equal to Infinity, `false` otherwise.
+ `finite(number)`: returns `true` if value is not equal to Infinity, `false` otherwise.
+ `between(number, number)`: returns a function that returns true, if a given value is between the two numbers initially given.
+ `even(number)`: returns `true` if value is even, `false` otherwise.
+ `odd(number)`: returns `true` if value is odd, `false` otherwise.

### math
```javascript
var f = require('functioner').math;
```

```javascript
var numbers = [0, 1, 2, 3, 4];

var add2 = numbers.map(f.add(2));
//    => [2, 3, 4, 5, 6]

var clamped = numbers.map(f.clamp(1, 3));
//    => [ 1, 1, 2, 3, 3 ]

var scaled = numbers.map(f.scale(0, 4, 0, 1));
//    => [ 0, 0.25, 0.5, 0.75, 1 ]
```

+ `add(number)`: returns a function that adds the number given to any value given to the function.
+ `subtract(number)`: returns a function that subtracts the number given to any value given to the function.
+ `divide(number)`: returns a function that divides any number given to the function by the number initially given.
+ `multiply(number)`: returns a function that multiplies any number given to the function by the number initially given.
+ `pow(number)`: returns a function that takes the power of any number given to the function to the exponent of the number initially given.
+ `sum(function)`: takes a function and returns a function that calculates the sum from the given parameters from n0 to n
+ `scale(inMin, inMax, outMin, outMax)`: returns a function that scales a the number given, according to the in range and out range.
+ `clamp(min, max)`: returns a function that clamps the value given in the range initially given.
+ `compose(...functions)`: returns a function composed of all the functions given, like so: `f0(f1(f2(fn)))`

### extras
+ `accessor(string)`: returns a function that gives the value at an objects has. Example: accessor('length')(str) would return the length of str.
+ `index(integer)`: returns a function that returns the index given of a given array.
+ `print(value)`: console.log(value)
