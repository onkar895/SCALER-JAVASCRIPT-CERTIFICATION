var a = 20

var a = 60 // var keyword changes the value of a with new declaration

// 1. Solution of the re-declaration problem
let b = 30

// let b = 40
// Cannot redeclare the same varaible name.'let' can't allow you to re-decalre the same variable name.

// b = 68 : You are allowed to re-assign the variable with let keyword but not redeclared.

console.log(a)

console.log(b)

// 2. let is a Block scoped :

if (true) {
  let c = 70
  console.log(c)
}

// console.log(c)  -  This line gives the error because with 'let' keyword you can't access the variables declared outside the scope as they are block scoped.

// const keyword

const x = 10

// const x = 70   error
// x = 60         error
// So with the 'const' keyword you can't allow to re-assign as well as re-declare the variables. 

console.log(x)
