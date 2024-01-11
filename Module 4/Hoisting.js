// Hoisting is a concept in javascript that allows you to initialize a value (variable and function) before even declaring it.

console.log(a) // undefined
Greet() // Hello

var a = 'hi'
console.log(a) // hi

function Greet () {
  console.log('Hello')
}

// Function Expression advantage :

// let result = add(3, 4)
// console.log(result)       // Error

var add = function (x, y) {
  // console.log(x + y)
  return x + y
}

let result = add(3, 4)
console.log(result)

// The main advantage of function expression is that you cannot call the function expression before declaring that.
// and that's good advantage for coder's that it enhances the coding user experience
