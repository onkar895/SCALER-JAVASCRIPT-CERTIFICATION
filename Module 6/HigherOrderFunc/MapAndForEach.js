// Higher Order Function :

// Higher Order Functions are functions that operate on other functions, either by taking them as arguments or by returning them.
// In simple words, A higher order function is a function that receives a function as an argument or returns the function as output.

// Normal Way to get Squared array :
let arr = [1, 2, 3, 4, 5]

let arrSquare = []

for (let i = 0; i < arr.length; i++) {
  arrSquare.push(arr[i] * arr[i])
}
console.log(arrSquare)

// Higher Order Function :

// Using map method to get Squared array  :
// Map will loop through eveery element of your array and will perform specific operations that you have provided.
//  It creates a new array by applying a provided function to each element of the original array. The result of the function for each element is collected into a new array, and this new array is returned.

const arr1 = [1, 2, 3, 4, 5]

const SquaredArr = arr1.map((x) => {
  return (x * x)
})

console.log(SquaredArr)

// Another Example :
// Convert Rs. into $
const transactions = [1000, 2000, 3000, 5000, 7000, 8000]

const INRTODOLLAR = 80

const transactionInINR = transactions.map((Inr) => {
  return (Inr / INRTODOLLAR).toFixed(0)
})

console.log(transactionInINR)

// ForEach Method :
//  It does not return anything (or returns undefined). It is used for iterating over the elements of an array and performing a side effect (like modifying the array or performing some operation on each element).
// The only difference in 'map and forEach' that forEach actually won't return anything. So, You can use forEach inside its scope only.
// And also forEach will not return a new array, It will only return the values which neither an array nor an objects.
const transactionInINR1 = transactions.forEach((Inr) => {
  console.log((Inr / INRTODOLLAR).toFixed(0))
})
