// Encapsulation  :

// Encapsulation is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details of an object from other objects and code and exposing only the necessary information to the outside environment.

// In JavaScript, encapsulation is achieved by using closures and access modifiers, such as the private and public keywords.

// JavaScript uses closures to implement encapsulation, which allows developers to create private variables and methods that cannot be accessed from outside the object.

// That means, You should not be allowed to access the data and methods from inside of the class to its outside environment.

function Person (name, age) {
  let privateAge = age
  this.name = name

  this.getAge = function () {
    return privateAge
  }
}

let person = new Person('John', 30)
console.log(person.name); // "John"
console.log(person.privateAge) // undefined
console.log(person.getAge()) // 30
// In this example, the privateAge variable is defined inside the constructor function and can only be accessed using the getAge method.
// This means that the internal state of the object is hidden from other objects and code, providing a level of protection and security.

// Using Class :
class Person1 {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  showDetails () {
    console.log(`Name is:${this.name}`)
    console.log(`Age is:${this.age}`)
  }

  getDeatils () {
    this.showDetails()
  }
}

let Person2 = new Person1('onkar', 25)
Person2.getDeatils()
// So, if you see in the above code the internal details which is name and age, showdetails function is hidden and only a specific method (getDetails1) is responsible for accessing and displaying the private information.

// Using Clousure :
function person3 (name, age) {
  // private variables
  let privateName = name
  let privateAge = age

  // private function
  function showDetails1 () {
    console.log(`Name is: ${privateName}`)
    console.log(`Age is: ${privateAge}`)
  }

  // public function
  function getDetails1 () {
    showDetails1()
  }

  // return an object with public methods
  return {
    getDetails1: getDetails1
  }
}

// create an instance of person3
let Person3 = person3('onkar', 25)

// access public method to get details
Person3.getDetails1()
//  So, if you see in the above code where private data (privateName and privateAge) is hidden within the person3 function, and only a specific method (getDetails1) is responsible for accessing and displaying the private information.
