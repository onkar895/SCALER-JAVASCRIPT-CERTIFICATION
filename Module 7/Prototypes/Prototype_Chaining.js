// Prototype chaining :
// Prototype chaining in JavaScript is a fundamental concept in how JavaScript implements inheritance. Every object in JavaScript has a prototype, which is essentially a reference to another object. When you access a property or method of an object, JavaScript will first check if that property or method exists on the object itself. If it doesn't find it, it will look for it on the object's prototype, and then on the prototype's prototype, and so on, until it either finds the property/method or reaches the end of the prototype chain (the prototype is null).

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age

  // this.getNameandAge = function () {
  //   console.log(`I am ${this.name} and my age is ${this.age}`)
  }
}

Person.prototype.getNameandAge = function () {
  console.log(`I am ${this.name} and my age is ${this.age}`)
}
// After using prototype, you will find out that you will not getting the 'getNameandage 'function inside the Person. but you will get it inside the Prototype object inside the console.
// So, this is how prototype help you to write code better.

let Person1 = new Person('Onkar', 25)
console.log(Person1)
console.log(Person1.getNameandAge())

let Person2 = new Person('Rishi', 27)
console.log(Person2)
console.log(Person2.getNameandAge())

// After creating two objects Person1 and Person2 and after logging it, you will find out in console that you will get the same function name for both the objects. Its the bad idea to have same function for many objects. 
// So that's why we use prototype chaining that Person object have one function and this function is linked to the two objects over here. 
// So how will you now get the function data by using objects.Then you have to create that function outsid ethe clas with 'prototype' keyword. So that Person1 and Person2 gets linked to the Person Object.
