// This Keyword : (Browser - In Strict Mode)
'use strict'

console.log(this) // 1. Window Object

// 2. When you will be using function in strict mode for browser, then this keyword will always refferd to undefined.
function displayThis () {
  console.log(this) // undefined
}

displayThis()

// 3. When you use function inside the Object in strict mode and non strict mode also for browser, it always refers to the object itself.
let myObj = {
  name: 'onkar',
  age: 25,

  myFn: function () {
    console.log(this)
  }
}

myObj.myFn()

// 4. When you use function inside function inside the Object in strict mode , it always refers to undefined.
let myObj2 = {
  name: 'manish',
  age: 22,

  myFn2: function () {
    function myFn3 () {
      console.log(this) // undefined
    }
    myFn3()
  }
}

myObj2.myFn2()
