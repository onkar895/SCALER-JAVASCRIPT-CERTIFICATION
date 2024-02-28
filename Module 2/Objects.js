// Objects in javascript are unorderd collection of 'key-value' pairs. and these key-value pairs are called 'properties'.

var person = {
  Firstname: 'onkar',
  Lastname: 'karale',
  age: 24
}

// Accesing the objects:

// dot notation
console.log(person.age)

// bracket notation
console.log(person['Lastname'])
console.log(person['Firstname'])

// many Objects and arrays inside one object :
var captain = {
  Firstname: 'Steve',
  Lastname: 'Rogers',
  age: 28,

  friends: ['Bucky', 'Bruce', 'Stark'],

  address: {
    state: 'new york',
    city: {
      name: 'Brooklyn',
      pincode: 123456
    }
  }
}
// accesing arrays inside object
var cap = captain.friends[1]
console.log(cap) // Bruce

// accesing object inside an object
var obj = captain.address.city.name
console.log(obj) // Brooklyn

console.log(captain['friends'][0]) // Bucky
console.log(captain['address']['city']['pincode'])

// updating an existing property inside an objects
captain.address.city.name = 'Pune'
console.log(captain.address.city)

// adding the properties insdie an objects
captain.movies = ['Age of Ultron', 'captain america']
console.log(captain)

// deleting the properties insdie an objects
delete captain.age
console.log(captain)
