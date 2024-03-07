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

// The spread operator creates a new object secondperson
let secondperson = { ...firstperson }  // shallow copy

secondperson.name = 'rishi'
// but does not create copies of nested objects.
secondperson.address.city = 'Mumbai'

console.log(firstperson)
console.log(secondperson)
// The firstperson object remains unchanged because the modifications were made only to the secondperson object.

// The secondperson object has its name property changed to 'rishi', and the city property of the nested address object is changed to 'Mumbai'.