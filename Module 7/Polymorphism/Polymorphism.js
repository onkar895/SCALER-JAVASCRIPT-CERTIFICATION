// Polymorphism :
// Poly -> many
// morph ->  forms
// ism -> method

// In JavaScript, polymorphism is a concept related to object-oriented programming (OOP) that allows for, the same function to be used with different types of data. 
// or you can say that it that refers to the ability of different objects to respond to the same method call in different ways.
// In simple words, that you can have same named method and you can call it differently and it will give you different output, That's how polymorphism works.
//  This enables code to be more flexible and adaptable.There are two main types of polymorphism in JavaScript: compile - time polymorphism(also known as method overloading) and runtime polymorphism(also known as method overriding).

// 1. Compile-time Polymorphism: (Method Overloading)
// JavaScript does not have traditional method overloading like some other languages, such as Java or C++. However, you can achieve a form of compile-time polymorphism by checking the number and types of arguments passed to a function and then responding accordingly.

// Example 1:
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
// So here you see that we have created 3 different objects from 3 different classes and inside all those classes we have same method called sound() but this method behaving differently when we are calling it for any other object. so basically it gets overridden.

// Example 2 :

class Shape {
  constructor (name) {
    this.name = name
  }
  draw () {
    console.log(`Drawing a ${this.name}`)
  }
}

class Circle extends Shape {
  draw () {
    console.log(`Drawing a Circle`)
  }
}

class Square extends Shape {
  draw () {
    console.log(`Drawing a Square`)
  }
}

let shape = new Shape('Shape')
let circle = new Circle()
let square = new Square()

shape.draw() // Drawing a Shape
circle.draw() // Drawing a Circle
square.draw() // Drawing a Square
// In this example, the draw() method is overridden in the subclasses Circle and Square, providing a different implementation of the method that is already provided by the superclass Shape.

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
