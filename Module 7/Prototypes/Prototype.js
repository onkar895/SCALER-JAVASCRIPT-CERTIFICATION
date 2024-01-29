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
// So this is what prototype object is.