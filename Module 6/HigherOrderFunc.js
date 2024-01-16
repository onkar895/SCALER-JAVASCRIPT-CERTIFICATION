// Higher Order Function :

// Higher Order Functions are functions that operate on other functions, either by taking them as arguments or by returning them.
// In simple words, A higher order function is a function that receivees a function as an argument or returns the function as output.

// Normal Way :
let arr = [1, 2, 3, 4, 5]

let arrSquare = []

for (let i = 0; i < arr.length; i++) {
  arrSquare.push(arr[i] * arr[i])
}
console.log(arrSquare)

// Higher Ordedr Function : Using map
let arr1 = [1, 2, 3, 4, 5]

const Square = arr1.map((x) => {
  console.log(x * x)
})
