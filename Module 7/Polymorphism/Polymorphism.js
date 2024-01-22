// Polymorphism :
// Poly -> many
// morph ->  forms
// ism -> method

// In JavaScript, polymorphism is a concept related to object-oriented programming (OOP) that allows objects of different types to be treated as objects of a common type.
// In simple words, that you can have same named method and you can call it differently and it will give you different output, That's how polymorphism works.
//  This enables code to be more flexible and adaptable.There are two main types of polymorphism in JavaScript: compile - time polymorphism(also known as method overloading) and runtime polymorphism(also known as method overriding).

class Animal {

  sound () {
    console.log(`Animal make different sounds`)
  }
}

class Dog {

  sound () {
    console.log(`Dog Barks`)
  }
}

class Cat {

  sound () {
    console.log(`Cat Mews`)
  }
}

let Animal1 = new Animal()
Animal1.sound()
let Tommy = new Dog()
Tommy.sound()
let percy = new Cat()
percy.sound()
// So here you see that we have created 3 different objects from 3 different classes and inside all those classes we have same method called sound() but this method behaving differently when we are calling it for any other object. so basically it gets overriding.

// 1. Compile-time Polymorphism:
// JavaScript does not have traditional method overloading like some other languages, such as Java or C++. However, you can achieve a form of compile-time polymorphism by checking the number and types of arguments passed to a function and then responding accordingly.

// Here's a simple example:

function add (x, y) {
  if (arguments.length === 2) {
    return x + y
  } else if (arguments.length === 3) {
    return arguments[0] + arguments[1] + arguments[2]
  }
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3, 4)); // Output: 9
// In this example, the add function behaves differently based on the number of arguments passed.

// 2. Runtime Polymorphism:
// JavaScript supports runtime polymorphism through prototype-based inheritance. Objects can share a common prototype and override or extend methods.

// Here's an example using prototype-based inheritance:

// Base object constructor
function Animal2 (name) {
  this.name = name
}

// Method shared by all Animal objects
Animal2.prototype.sound = function () {
  console.log('Generic animal sound')
}

// Derived object constructor
function Cat1 (name) {
  // Call the base object constructor
  Animal2.call(this, name)
}

// Inherit from Animal
Cat1.prototype = Object.create(Animal2.prototype)

// Override the sound method for Cat objects
Cat1.prototype.sound = function () {
  console.log('Meow')
}

// Usage
let genericAnimal = new Animal2('Generic')
let fluffy = new Cat('Fluffy')

genericAnimal.sound(); // Output: Generic animal sound
fluffy.sound(); // Output: Meow
// In this example, Cat objects inherit from Animal objects, and the sound method is overridden in the Cat prototype.
