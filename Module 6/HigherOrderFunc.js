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
// Map will loop through eveery element of your array and will perform specific operations that you have provided
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
  return Inr / INRTODOLLAR
})

console.log(transactionInINR)
