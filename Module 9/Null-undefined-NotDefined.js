// undefined

// case 1 : 
// undefined is a primitive value automatically assigned to variables that have been declared but have not been initialized with a value.
let a
console.log(a) // undefined because not assigning the value to a

// case 2 :
// It represents the absence of a value.
let arr = [1, 2, , 4]
console.log(arr[2]) // undefined because of empty array at index 2

// case 3 :
// It can also be the value returned by functions that do not explicitly return anything.
function test (a, b) {
  let result = a + b
// return result
}

let sum = test(2, 3)
console.log(sum) // undefined because this function doesn't return anything, so it implicitly returns undefined

// null :
// It is often used to indicate that a variable or object has no value or to explicitly clear a variable or object.

let myLife = null
console.log(myLife) // null

// not defined
// "Not defined" means we haven't yet defined anything.
// "Not defined" typically refers to a situation where a variable or identifier has not been declared or is out of scope.

console.log(z); // ReferenceError: z is not defined
