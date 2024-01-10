// Loops are the statements that we can use to control the flow of the program and to do repetative tasks.

var a = 'Hello World'

for (var i = 0; i <= 10; i++) {
  console.log(a)
}

// You have an array and you have to square each element of that array.

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var squareArr = []

for (var i = 0; i < num.length; i++) {
  squareArr.push(num[i] * num[i])
}
console.log(squareArr)
