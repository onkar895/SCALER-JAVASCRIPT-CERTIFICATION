// Reduce Method :
//  The reduce function takes a callback function as its argument, and this callback function defines how the reduction operation should be performed.
// The reduce() method executes a reducer function on each element of the array and returns a single output value stored in an accumulator.
// reduce() executes the given function for each value from left to right.

// You need to sum of every element in the array

// Without using reduce :
let num = [1, 2, 4, 6, 8]

let sum = 0 // accumulator

for (let i = 0; i < num.length; i++) {
  sum = sum + num[i]
}
console.log(sum)

// Using Reduce :
// reduce method always return a single value.
// Syntax :  arr.reduce(callback(accumulator, currentValue), initialValue)
let result = num.reduce((acc, val) => {
  let updatedSum = acc + val
  return updatedSum
}, 0)

console.log(result)
// acc stands for accumulator, and it represents the accumulated result of the operation.
// val represents the current value in the array being processed.
// The reduce method also takes an initial value for the accumulator, specified as 0 at the end of the reduce method call.

// Another Example :

const message = ['JavaScript ', 'is ', 'fun.']

// function to join each string elements
function joinStrings (accumulator, currentValue) {
  return accumulator + currentValue
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings)
console.log(joinedString)

// Output: JavaScript is fun.

// Covert the Array into Object

const arr = ['Onkar', 24, 'Karale']

// Output should be like : {0 : "Onkar", 1 : 24, 2 : "Karale"}

let returnObject = arr.reduce((obj, curr, index) => {
  obj[index] = curr
  return obj
}, {})

console.log(returnObject)

// We start with the array arr = ['Onkar', 24, 'Karale'].
// The reduce method is called on the array arr. reduce iterates over each element of the array and accumulates a result based on a callback function provided.
// The callback function takes four parameters:
// obj: The accumulator object.
// curr: The current element being processed in the array.
// index: The index of the current element being processed.
// arr: The original array arr.
// Inside the callback function:
// obj[index] = curr: This line assigns the current element (curr) to the accumulator object (obj) at the index index. This effectively builds an object where the keys are the indices of the array, and the values are the elements of the array.
// The updated object (obj) is returned at the end of each iteration.
// The initial value for the accumulator object is {} provided as the second argument to the reduce method.
// The result, which is the transformed object, is stored in the variable returnObject.
// Finally, the returnObject is logged to the console.
