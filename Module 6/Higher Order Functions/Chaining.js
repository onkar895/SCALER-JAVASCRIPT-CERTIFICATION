// Chaining Method :
// In JavaScript, method chaining is a programming technique where multiple methods are called on an object or an array in a single statement, with each method returning an object that can have further methods called on it. This can make the code more concise and readable.

// Here's a simple example using method chaining with an array:

let numbers = [1, 2, 3, 4, 5]
  
// Chaining array methods
let result = numbers
  .filter(num => num % 2 === 0) // Keep only even numbers
  .map(num => num * 2) // Double each remaining number
  .reduce((sum, num) => sum + num, 0) // Sum the doubled numbers

console.log(result); // Output: 12

// In this example, the filter method is first called to keep only the even numbers, then the map method is used to double each remaining number, and finally, the reduce method is used to sum up the doubled numbers.

// You can chain methods as long as each method returns an object that
