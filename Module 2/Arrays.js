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
let courses = ['HTML', 'CSS', 'JavaScript', 'React']
let str = courses.toString() // Converting array ot String 
console.log(str) // HTML,CSS,JavaScript,React

// 6. join method :
// This join() method helps to join two arrays as a string. If we pass any parameter to this method it will join the array by using that parameter.
let courses1 = ['HTML', 'CSS', 'JavaScript', 'React']
console.log(courses1.join('|')) // Joining the array elements
// HTML|CSS|JavaScript|React

// 7. delete operator :
// The delete operator used to delete the given value that can be object, array or anything.

let emp = {
  firstName: 'Raj',
  lastName: 'Kumar',
  salary: 40000
}

console.log(delete emp.salary)
console.log(emp)

// 8. The concat() method :
// The concat() method  is used to concatinate the two or more arrays and it gives the mergerd array.
// Declare three arrays 
let arr1 = [11, 12, 13]
let arr2 = [14, 15, 16]
let arr3 = [17, 18, 19]

let newArr = arr1.concat(arr2, arr3)
console.log(newArr) // [ 11, 12, 13, 14, 15, 16, 17, 18, 19 ]

// 9. Splice Method :
// The splice() method is used to Insert and Remove elements in between the Array.
// Syntax : Array.splice (start, deleteCount, item 1, item 2….) 
// Declare and initialize array 
let numArr = [20, 30, 40, 50]
// Removing an adding element at a particular location in an array :
numArr.splice(1, 3) // Delete 3 elements starting from index 1  // 20

numArr.splice(1, 0, 3, 4, 5) // Insert 80, 90, 100 at starting index 1  
console.log(numArr)

// Declare and initialize array 
let strArr = ['amit', 'sumit', 'anil']
// Delete two elements starting from index 1 and add three elements. 
strArr.splice(1, 2, 'Geeks', 'Geeks1', 'Geeks2')

console.log(strArr) // [ 'amit', 'Geeks', 'Geeks1', 'Geeks2' ]

// 9. slice() method
// The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments
