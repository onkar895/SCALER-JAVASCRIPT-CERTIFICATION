// Some Method :

// Some : condition Check : To get true or false based on a condition
// It will return true if even 1 element satisfies the condition

const transactions = [-1000, 2000, -3000, -500, -7000, -800]

let result = transactions.some((num) => {
  return num > 0
})

console.log(result)

// Every Method :
// Every method exactly same like some but the only difference is that every element should satisfies the condition, only then it will return true.
const transactionsEvery = [-1000, -2000, -3000, -500, -7000, -800]

let resultevery = transactionsEvery.every((num) => {
  return num < 0
})
console.log(resultevery)
