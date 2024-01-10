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

// Inbuild js array methods
var arr2 = [12, 14, 56, 86]

// pop method : This method removes the last element from an array
var c = arr2.pop()
console.log('popped element:', c)
console.log('popped array', arr2)

// push method : This method adds the new element to the end of an array
arr2.push(100)
console.log('pushed array', arr2)

// shift method : This method removes the first element from an array
var m = arr2.shift()
console.log('shifted element:', m)
console.log('shifted array', arr2)

// unshift method :  This method adds the new element to the start of an array
arr2.unshift(200)
console.log('unshifted array', arr2)
