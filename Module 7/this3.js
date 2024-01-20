// This Keyword : (Browser - In Non-Strict Mode)

console.log(this) // 1. Window Object

// 2. When you will be using function in Non strict mode for browser, then this keyword will always refferd to window object.
function displayThis () {
  console.log(this) // Window Object
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

// 4. When you use function inside function inside the Object in non strict mode , it always refers to window object.
let myObj2 = {
  name: 'manish',
  age: 22,

  myFn2: function () {
    function myFn3 () {
      console.log(this) // window
    }
    myFn3()
  }
}

myObj2.myFn2()
