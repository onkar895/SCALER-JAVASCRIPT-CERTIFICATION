// Array :
// JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. 
// It can hold various data types, including numbers, strings, objects, and even other arrays.

// Arrays provides you an ordered collection of data.
var arr = [12, 15.6, 'onkar', true]
console.log(arr)

// accesing the elements
var a = arr[2]
console.log(a)

// replacing elements of an array
arr[2] = 'Manish'
console.log(arr)

// Getting the Length of an array
console.log('Length of an given array is:', arr.length)

// Inbuild js array methods :

var arr2 = [12, 14, 56, 86]

// 1. pop method : 
// This method removes the last element from an array
var c = arr2.pop()
console.log('popped element:', c)
console.log('popped array', arr2)

// What if I want to remove any element in the array :

// Using Splice
var array = [1, 2, 3, 4, 5]
array.splice(2, 1) // index I want to remove is 2 and there is only 1 element I want to remove
console.log(array); // Output: [1, 2, 4, 5]

// Using Filter
var array = [1, 2, 3, 4, 5]
var indexToRemove = 2 // Index of the element you want to remove

var newArray = array.filter(function (index) {
  return index !== indexToRemove
})

console.log(newArray); // Output: [1, 2, 4, 5]

// 2. push method : 
// This method adds the new element to the end of an array
arr2.push(100)
console.log('pushed array', arr2)

// 3. shift method : 
// This method removes the first element from an array
var m = arr2.shift()
console.log('shifted element:', m)
console.log('shifted array', arr2)

// 4. unshift method :  
// This method adds the new element to the start of an array
arr2.unshift(200)
console.log('unshifted array', arr2)

// 5. toString() method :
// The toString() method converts the given value into the string.
