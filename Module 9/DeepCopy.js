// Deep Copy :
// A deep copy creates a completely independent copy of the original object along with copies of all the nested objects.

let firstperson = {
  name: 'onkar',
  age: 24,

  address: {
    city: 'pune',
    state: 'MH'
  }
}

let secondPerson = JSON.parse(JSON.stringify(firstperson))
// Here, JSON.stringify() converts the original object firstperson into a JSON string, effectively creating a deep copy of the object. Then, JSON.parse() parses the JSON string back into a JavaScript object, resulting in a completely separate copy (secondPerson) with its own set of properties.

secondPerson.address.city = 'mumbai'

console.log(firstperson)
console.log(secondPerson)

// The secondPerson object has its address.city property changed to 'mumbai', while the firstperson object retains its original address.city value of 'pune'.

// This approach effectively creates a deep copy of the object, ensuring that modifications to the copied object do not affect the original object and vice versa
