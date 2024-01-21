// Inheritance:

// Inheritance in JavaScript is a mechanism that allows one object to inherit properties and methods from another object.
// There are two types of inheritance in javaScript :
// 1. Classical : Class-based syntax introduced in ECMAScript 2015 (ES6)
// 2. Prototype : JavaScript primarily uses prototype-based inheritance

// Classical Inheritance :
// Methods and Properties from Base(parent) class can be passed into derived(child) class.
// That means, you will be having a parent class and can have different properties. so If you want that child(derived) class to have these same properties which parent class have, then you will not have to define them seperately for that derived class.

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  welcome () {
    console.log(`Welcome ${this.name}`)
  }
}

// So now here, name and age properties will be common for the below two classes as well.
// So, instead of defining the name and age seperately to the Teacher and Student classes what we can do, we can inherit these properties from the Person Class.
// For that, We have a special method called 'super method' and inside this super method we just need to pass all the properties that you want to inherit from the parent class.

// So here we can use the word 'extends' which basically means that, this Teacher class will extends the Person Class.
// This indicates that the Teacher class inherits from the Person class.
class Teacher extends Person {
  constructor (name, age, classStrength) {
    super(name, age)
    this.classStrength = classStrength
  }

  // If you want to inherit the method from the parent class then you just need to create method here and inside this method you have to use super keyword.
  // So this super keyword will take this welcome function from the Person class.
  test () {
    super.welcome()
  }
}

class Student extends Person {
  constructor (name, age, percentage, attendance) {
    super(name, age)
    this.percentage = percentage
    this.attendance = attendance
  }

  bunk () {
    super.welcome()
  }
}

let Person1 = new Person('onkar', 24)
console.log(Person1)

let Teacher1 = new Teacher('Marky', 36, 60)
console.log(Teacher1)
Teacher1.test()

let Student1 = new Student('Manish', 22, '88%', '56%')
console.log(Student1)
Student1.bunk()
