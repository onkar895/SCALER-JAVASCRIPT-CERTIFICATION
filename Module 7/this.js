// This Keyword : (Node Js - Non Strict Mode)

// 'this' keyword refers to an object that is executing the current piece of code.
// It references the object that executing the current function.

console.log(this) // 1. Empty Object

// 2. When you will be using function in non strict mode, then this keyword will always refferd to the global object.
function displayThis () {
  console.log(this) // Global Object
}

displayThis()

// 3. When you use function inside the Object in non strict mode, it basically refers to the object itself.
let myObj = {
  name: 'onkar',
  age: 25,

  myFn: function () {
    console.log(this)
  }
}

myObj.myFn()

// 4. When you use function inside function inside the Object in non strict mode , it basically refers to the global object.
let myObj2 = {
  name: 'manish',
  age: 22,

  myFn2: function () {
    function myFn3 () {
      console.log(this) // global object
    }
    myFn3()
  }
}

myObj2.myFn2()
