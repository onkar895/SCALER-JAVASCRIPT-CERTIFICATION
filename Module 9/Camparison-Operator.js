// Camparison Operators : == and ===

// == (Equality Operator):
// This operator compares two values after converting them to a common type.
// It performs type conversion if the operands are of different types.
let a = 2

let b = '2'

console.log(a == b) // true, because '5' is coerced to a number
// In this case, JavaScript converts the string '2' to the number 2 before comparing.
// '==' will always check for the value, it won't check for the type.

// === (Identity Operator or Strict Equality Operator):
// This operator also compares two values but does not perform type conversion.
// It always checks for the value as well as type.

let x = 2

let y = '2'

console.log(x === y) // false, because the types are different
// Here, '2' is a string and 2 is a number, so they are not considered strictly equal.
