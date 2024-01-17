// Callback Function :
// In JavaScript,a callback function is a function that is passed into another function as an argument.
// This function can be invoked at a later stage of time.

// Normal Functions :
function printFirstName (firstName) {
  console.log(firstName)
}

printFirstName('Onkar')

function printLastName (lastName) {
  console.log(lastName)
}

printLastName('Karale')

// Callback Functions :
function FirstName (fName, callBack) {
  console.log(fName)
  callBack('karale')
// Passed into another function as an argument.
}

FirstName('Rishi', LastName)
// So here, LastName is passed as a callback to FirstName, and it gets executed with the argument 'karale'.

function LastName (lName) {
  console.log(lName)
}

// Example : Checks for the even number

const isEven = (n) => {
  return n % 2 == 0
}

let printResult = (evenFn, num) => {
  const isNumEven = evenFn(num)
  console.log(`The number ${num} is an even number - ${isNumEven}`)
}

printResult(isEven, 16)
