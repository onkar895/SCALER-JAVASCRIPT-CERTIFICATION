// Modularity :
// Imagine we have one big app for all your needs. Would that be a good idea that include everything into just one app.
// So, this is where Modularity comes.
// Modularity means that you are actually defining your code into different modules that all particular modules will do diff, diff tasks.
// so thats, You have one main module, inside which you will use all your modules whenever those modules will be required.

function add (a, b) {
  console.log(a + b)
}

function sub (a, b) {
  console.log(a - b)
}

function mul (a, b) {
  console.log(a * b)
}

function div (a, b) {
  console.log(a / b)
}

module.exports = {
  addition: add,
  substraction: sub,
  multiplication: mul,
  division: div
}
