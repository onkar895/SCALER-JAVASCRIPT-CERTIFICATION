// Pure Functions :
// A pure function is a function that, given the same input, will always return the same output, and it has no observable side effects.
// So basically, Pure functions are the functions that are not dependent upon the external factor and the external resource.

var a = 2
// Impure Function 
function ImPure (x) {
  console.log(x + a)
  a++
}

ImPure(4)
ImPure(4)
// So here in this output's you will see that it doesn't return the same output that var a = 2 is a external factor to make changes everytime when the function calls.

// ImPure Function :
function ImPure1 (x, a) {
  console.log(x + a)
}

ImPure1(4, 5)
// It's also not a pure function that, this time its not depending upon the external factor but depends upon the external resource within the function like console.log

// Pure Function :
function Pure (x, a) {
  return x + a
}

console.log(Pure(4, 5))
// So this is a pure function that , given the same input, will always return the same output. Also it is not depending upon any external factor and resource, that makes it as a pure function.
