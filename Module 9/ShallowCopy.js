// Shallow Copy :
// Shallow copy and deep copy are concepts related to duplicating objects or data structures in programming.
// A shallow copy creates a new object but does not create copies of nested objects. Instead, it copies references to the nested objects.
// Shallow copy is often performed using methods like Object.assign() or the spread operator (... in JavaScript).

let firstperson = {
  name: 'onkar',
  age: 24,
  
  address: {
    city: 'pune',
    state: 'MH'
  }
}

// shallow copy
let secondperson = { ...firstperson }
// A shallow copy creates a new object 
secondperson.name = 'rishi'
// but does not create copies of nested objects.
secondperson.address.city = 'Mumbai'

console.log(firstperson)
console.log(secondperson)