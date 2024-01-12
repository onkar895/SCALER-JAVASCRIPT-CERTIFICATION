// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Array destructuring :
// Array destructuring is a unique technique that allows you to neatly extract an array’s value into new variables.

let profile = ['Oluwatobi', 'Sofela', 'codesweetly.com']

let [firstName, lastName, website] = profile

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"

// Direct Array Destructuring :
// How to Do Direct Array Destructuring JavaScript lets you destructure an array directly like so :

const [firstName1, lastName1, website1] = [
  'Oluwatobi',
  'Sofela',
  'codesweetly.com'
]

console.log(firstName1); // "Oluwatobi"
console.log(lastName1); // "Sofela"
console.log(website1); // "codesweetly.com"

// Array Destructuring using rest[...] operator :
// How to Use Array Destructuring to Assign the Rest of an Array Literal to a Variable
// JavaScript allows you to use the rest operator within a destructuring array to assign the rest of a regular array to a variable.

// Here’s an example:

const [firstName2, ...otherInfo] = ['Oluwatobi', 'Sofela', 'codesweetly.com']

console.log(firstName2); // "Oluwatobi"
console.log(otherInfo); // ["Sofela", "codesweetly.com"]

// Object destructuring :
// Object destructuring is a unique technique that allows you to neatly extract an object’s value into new variables.

const myProfile = {
  fName: 'Onkar',
  lName: 'Karale',
  web: 'onkarkarale.com'
}

const { fName, lName, web } = myProfile

console.log(fName)
console.log(lName)
console.log(web)

// Nested Object destructuring :
// Object destructuring is a unique technique that allows you to neatly extract an object’s value into new variables.

const MyProfile = {
  f1Name: 'Onkar',
  l1Name: 'Karale',
  web1: 'onkarkarale.com',

  address: {
    country: 'india',
    city : 'karad'
  }
}

const { f1Name, l1Name, web1, address:{country, city} } = MyProfile

console.log(f1Name)
console.log(l1Name)
console.log(web1)
// console.log(address)
console.log(country)
console.log(city)

// Object destructuring using rest{...} operator :

const {fName2, ...OtherInfo} = {
  fName2: 'Oluwatobi',
  lName2: 'Sofela',
  web: 'codesweetly.com'
}

console.log(fName2); // "Oluwatobi"
console.log(OtherInfo); // ["Sofela", "codesweetly.com"]
