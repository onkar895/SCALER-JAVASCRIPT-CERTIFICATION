// A Function is a block of code that performs a specific task.

// Simple Function
function Greet () {
  console.log('Good Morning')
}

Greet()

// Passing Parameters and Arguments
function Add (a, b) {
  console.log('Addition:', a + b)
}

Add(4, 5)

// Function Expression : It is a set of statements.
// The main advantage of function expression is that you cannot call an function expression before declaring that.

var add = function (x, y) {
  // console.log(x + y)
  return x + y
}

let result = add(3, 4)
console.log(result)
