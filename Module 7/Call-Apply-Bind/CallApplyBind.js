// Before implementing bind(), apply(), and call() polyfills, let us know what is a polyfill in JavaScript:

// Polyfill: 
// Polyfills are the implementation of the features that are given by our browsers, but may not be present in the previous versions of it.

// Why we need this call, apply and bind :

let Person1 = {
  fname: 'onkar',
  lname: 'karale',
  age: 24,

  printDetails: function () {
    console.log(`Hi I am ${this.fname} ${this.lname} and my age is ${this.age}`)
  }

}

let Person2 = {
  fname: 'RAJ',
  lname: 'malhotra',
  age: 34,

  printDetails: function () {
    console.log(`Hi I am ${this.fname} ${this.lname} and my age is ${this.age}`)
  }

}

Person1.printDetails()
Person2.printDetails()

// So here in the above code , you can see that I am using the same method as printDetails that is repeating. But the dry rule states that you should not repeat the same method.

// So what we can do here, so that we don't need to repeat the functions for every single object.
// We can use Call, apply and bind.

// Call : Call is a function that helps you change the context of the invoking function.

// Example 1:
let Person3 = {
  fname: 'onkar',
  lname: 'karale',
  age: 24,

  printDetails: function () {
    console.log(`Hi I am ${this.fname} ${this.lname} and my age is ${this.age}`)
  }

}

// printDetails: function () {
//     console.log(`Hi I am ${this.fname} ${this.lname} and my age is ${this.age}`)
//   }
// You can also access the function from globally for each of the objects like
// printDetails.call(Person4)

// printDetails: function (city) {
//     console.log(`Hi I am ${this.fname} ${this.lname} and my age is ${this.age} and I am from ${city}`)
//   }
// You can also add the parameter to the function
// printDetails.call(Person4, "pune")

let Person4 = {
  fname: 'RAJ',
  lname: 'malhotra',
  age: 34
}

// call 
Person3.printDetails.call(Person4)

// So here you can see that by using 'call' we are not repeating the same method for every object. we just called 'Person3' and told to give the particular function you have to 'Person4'.

// Example 2 :
function sayHello () {
  console.log('Hello, ' + this.name)
}

var person = {name: 'Alice'}
sayHello.call(person); // Outputs: "Hello, Alice

// Example 3 with parameters and arguments:
function sayGoodBye (greet) {
  console.log('Goodbye, ' + this.name + ' ' + greet)
}

var person2 = {name: 'Alice'}
sayGoodBye.call(person2, 'sorry'); // Outputs: "Hello, Alice

// Apply :
// Apply is very similar to the call function. The only difference is that in 'apply' you can pass an array as an argument list.
// This method is similar to call, but it accepts arguments as an array.

function sayHello (greeting, lname) {
  console.log(greeting + ', ' + this.name + ' ' + lname)
}

var person = {name: 'Bob'}
sayHello.apply(person, ['Howdy', 'dizard']); // Outputs: "Howdy, Bob dizard"

// Bind :
// Bind is a function that helps you create another function that you can execute later with the new context of 'this' that is provided.
// This method actually allows you to store the function and call it at the later stage of time.

function sayHello () {
  console.log('Hello, ' + this.name)
}

var person = {name: 'Charlie'}
var sayHelloToCharlie = sayHello.bind(person)
sayHelloToCharlie(); // Outputs: "Hello, Charlie"
