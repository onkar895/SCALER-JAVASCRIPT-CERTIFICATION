// Rest and Spread :

// Certainly! In JavaScript, the rest and spread operators are both denoted by three consecutive dots (...), but they serve different purposes.
// Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

// Spread Operator (...) :
// The spread operator allows an iterable (like an array) to be expanded into individual elements. It's useful in situations where you want to unpack elements of an array or object.

// Examples:
//  1. Copying an array:

const arr = [1, 2, 3]
const arr1 = [...arr] // creates a copy of arr
console.log(arr1); // Output: [1, 2, 3]

const num = [2, 4, 6, 8, 10]
const squares = (arr) => {
  return arr.map((num) => num * num)
}
const result = squares(num) // Normal method
console.log(result) // Output : [ 4, 16, 36, 64, 100 ]

const num2 = [...result] // using spread operator
console.log(num2) // Output : [ 4, 16, 36, 64, 100 ]

// 2.Concatenating arrays:
const arr2 = [1, 2, 3]
const arr3 = [4, 5, 6]
const combinedArr = [...arr2, ...arr3] // concatenates arr2 and arr3
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

//  3. Passing array elements as arguments to a function:
const nums = [1, 2, 3]
const sum = (a, b, c) => a + b + c
console.log(sum(...nums)); // Output: 6

// Add Squared array using spread :
const Num = [2, 3, 4]
const addSquaredArray = () => {
  return Num.map((xyz) => xyz * xyz).reduce((acc, curr) => acc + curr, 0)
}
console.log(addSquaredArray(...Num))

// Rest Parameter (...) :
// The rest parameter allows a function to accept an indefinite number of arguments as an array. It's used when you want to represent an indefinite number of arguments as an array.
// JavaScript allows you to use the 'rest' operator within a destructuring array to assign the rest of a regular array to a variable.

// Example:

function sum1 (...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

console.log(sum1(1, 2)); // Output: 3
console.log(sum1(1, 2, 3, 4)); // Output: 10
console.log(sum1(1, 2, 3, 4, 5)); // Output: 15
// In this example, the sum function can accept any number of arguments, and the rest parameter ...numbers collects all these arguments into an array called numbers, allowing us to perform operations on them easily.
 
// Squared Array using rest :
const SquaredArray1 = (...Num1) => {
  return Num1.map((xyz) => xyz * xyz)
}
console.log(SquaredArray1(2, 4, 6))

//  Add squared Array using rest :
const addSquaredArray1 = (...Num1) => {
  return Num1.map((xyz) => xyz * xyz).reduce((acc, curr) => acc + curr, 0)
}
console.log(addSquaredArray1(2, 4, 6))
