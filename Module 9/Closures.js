// So let's 1st understand what is the lexical environment or lexical scope  :

// Lexical Environment or scope = local memory + lexical env of its parent.
// Hence, Lexical Environement or lexical scope is the local memory along with the lexical environment of its parent.
// Lexical scope means that function defined inside a function will alway have access to its outer environment.

function test () {
  let a = 2

  function test1 () {
    console.log(a) // Output : 2
  }
  return test1
}
let fun = test()
console.log(fun)

fun()

// So what lexical Scope basically means that the test1() function always have the access to its outer environment which is function test() in this case. So it will have the access to a = 2 also. so output will be 2.

// So we are calling the test1 function but we are actually able to access the 'a' value also. so that is what 'clousure' is.

// Some complex examples of closures :

const greet = () => {
  let name = 'steve'

  const displayName = () => {
    console.log('Hi' + ' ' + name)

    let age = 25

    const displayAge = () => {
      console.log('My age is' + ' ' + age)
    }
    return displayAge
  }
  return displayName
}

let g1 = greet()
console.log(g1)

g1() // displayName

let g2 = g1()
console.log(g2)
g2() // displayAge
