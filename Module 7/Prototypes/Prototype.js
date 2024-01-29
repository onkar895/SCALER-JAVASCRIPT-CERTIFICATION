let myObj = {}

console.log(myObj)

let person = {
  name: 'onkar',
  age: 25
}
// hasOwnProperty actually searches for the particular key in the object person.
console.log(person.hasOwnProperty('name')) // true
console.log(person.hasOwnProperty('salary')) // false

// JavaScript has inbuild functions or methods that was alraedy defined for the objects.
// So whenever you create an object that 'prototype' object will always get linkd to that particular object, so that you can use every one of that properties and methods.
// So this is what 'prototype object' is.
// 'Prototype object' is basically a object that gets link to your object by default and inside that prototype object you will find all the methods that you can use with your particular objects

// Constructor function :

class Person1 {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}

let Person2 = new Person1('rishi', 30)
console.log(Person2)

// Prototype chaining :
// Prototype chaining in JavaScript is a fundamental concept in how JavaScript implements inheritance. Every object in JavaScript has a prototype, which is essentially a reference to another object. When you access a property or method of an object, JavaScript will first check if that property or method exists on the object itself. If it doesn't find it, it will look for it on the object's prototype, and then on the prototype's prototype, and so on, until it either finds the property/method or reaches the end of the prototype chain (the prototype is null).
