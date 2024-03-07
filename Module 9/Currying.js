// Currying:

// Currying is a functional programming technique in JavaScript where a function with multiple arguments is transformed into a sequence of nested functions, that will take a single argument each.

// The curried function returns a new function with one fewer argument than the original function until all arguments have been provided, at which point the final result is returned.

// Normal Function
const sum = (x, y) => {
  console.log(x + y)
}

sum(3, 5)

// Curried Function
const sumCurried = (x) => {
  return (y) => {
    console.log(x + y)
  }
}

let SumOfNum = sumCurried(2)

SumOfNum(4)

// Example 2 :
// Original function with multiple arguments
function multiply (x, y, z) {
  return x * y * z
}

// Curried version of the function
function curriedMultiply (x) {
  return function (y) {
    return function (z) {
      return x * y * z
    }
  }
}

// Usage of the curried function
const multiplyByTwo = curriedMultiply(5)
console.log(multiplyByTwo(3)(4)); // Output: 60
