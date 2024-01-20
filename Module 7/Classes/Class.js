// Classes in JavaScript :

// In JavaScript, classes provide a way to create objects and define their behavior. Classes were introduced in ECMAScript 2015 (ES6).
// They provide a more familiar and convenient syntax for creating objects and dealing with inheritance.

// The basic syntax looks like this:
class MyClass {
  // class body
}

// Constructor:
// Classes can have a special method called the 'constructor', which is invoked when an object is instantiated. It is used for initializing object properties.

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  welcome () {
    console.log(`welcome ${this.name}`)
  }

}

const john = new Person('John', 25)
console.log(john)

john.welcome()

// Methods:
// You can define methods within a class, which are functions associated with the class. Methods can be called on instances of the class.

class Dog {
  bark () {
    console.log('Woof!')
  }
}

const myDog = new Dog()
myDog.bark()
