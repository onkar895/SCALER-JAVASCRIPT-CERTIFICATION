// Filter Method :

// In JavaScript, the filter() method is used to create a new array with all elements that pass a certain condition. It does not modify the original array; instead, it returns a new array containing only the elements that meet the specified condition.

// You have to check for even numbers in an array and put them in a seperate array.

// WithOut using filter to get only even numbers:

const numbers = [1, 2, 3, 4, 5, 6]

let evenArray = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenArray.push(numbers[i])
  }
}
console.log(evenArray)

// Using filter to get only even numbers
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0
})

console.log(evenNumbers); // Output: [2, 4, 6]
console.log(numbers)
// It does not modify the original array
