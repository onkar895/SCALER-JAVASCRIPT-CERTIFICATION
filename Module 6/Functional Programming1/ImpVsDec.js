// We will be given a number and we have to check that if the square of that number is even or odd.

// Imperative way of writing the code :
const a = 4

const aSquared = a * a

let isEven

if (aSquared % 2 == 0) {
  isEven = true
}else {
  isEven = false
}
console.log(isEven)

// Declarative way of writing the code :
const checkForSquare = (x) => (x * x % 2 === 0 ? true : false)

console.log(checkForSquare(3))
// The function name checkForSquare clearly indicates its purpose.
// So if you see that, actually by using the function you are shortened the code so much. So that you actually saving a lot of time and you are also writing the code in more readable and efficient format. So this is the beauty of declarative way of writing the code.
