// Loops are the statements that we can use to control the flow of the program and to do repetative tasks.

// 1. For Loop :

var a = 'Hello World'

for (var i = 0; i <= 10; i++) {
  console.log(a)
}

//  Que. You have an array and you have to square each element of that array.

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var squareArr = []

for (var i = 0; i < num.length; i++) {
  squareArr.push(num[i] * num[i])
}
console.log(squareArr)

// 2. While Loop :

// While loop evaluates the condition in paranthesis.
// If the condition evaluates to true, the code inside the while loop is executed.
// The condition is evaluated again.
// This process continues until the condition is false.

var i = 1
var n = 10

while (i <= n) {
  console.log(i)
  i++
}

// Squared array using while
var x = 1
var n = 5
var s = []

while (x <= n) {
  s.push(x * x)
  x++
}

console.log(s)
