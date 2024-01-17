// Find Method :
// Find returns the first element of an array that satisfy the condition.

const transactions = [1000, 2000, 3000, -500, 7000, -800]

let firstWithdrawl = transactions.find((n) => {
  return n < 0
})

console.log(`First winthdrawl element ->` + firstWithdrawl)

// So here the first element that is encountered or that is n < 0 satisfy the condition is -500.
// So output will be -500

// FindIndex :
// findIndex returns the first element's index of an array that satisfy the condition.
let firstWithdrawlIndex = transactions.findIndex((n) => {
  return n < 0
})

console.log(`First Withdrawl Index ->` + firstWithdrawlIndex)
