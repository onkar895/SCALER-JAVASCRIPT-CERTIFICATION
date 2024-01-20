// Just imagine if you have to do this repetative task for every car data you have and you have atleast 100 to 150 cars. So, its little bit mad thing that you have to do this repetative tasks for every car data you have right.
// It is not a good way to create multiple objects which has same key name.

let car1 = {
  name: 'x4',
  company: 'BMW',
  color: 'Red'
}

let car2 = {
  name: 's-class',
  company: 'Mercedes',
  color: 'White'
}
// So to handle or create this kind of multiple tasks we use constructor function.
// constructor function is very useful to do multiple tasks.

// Constructor Function :

// In JavaScript, a constructor function is a special type of function that is used to create and initialize objects.
// When you want to create multiple objects with similar properties and methods, you can use a constructor function to define a blueprint for those.

// Constructor function
function Person (name, age) {
  this.name = name // key : value pair
  this.age = age // key : value pair
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}
// So, this name and age values passed as an argument automatically get assigns to the keys name and age itself.

// Creating objects using the constructor function :
// The new keyword is used to create instances of the Person constructor.
const person1 = new Person('John', 25)
const person2 = new Person('Jane', 30)

console.log(person1)
console.log(person2)

// Calling the method on the objects
person1.sayHello()
person2.sayHello()
