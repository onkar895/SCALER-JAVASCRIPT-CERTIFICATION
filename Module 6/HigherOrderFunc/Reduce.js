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
// reduce method always returning a single value.
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
