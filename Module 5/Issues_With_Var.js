// Issue 1 :
var a = 21

var a = 45 // redeclaration of a variable
console.log(a)

// Issue 2 :
if (a === 45) {
  var b = 50
  console.log(b)
}
console.log(b)
// We should not be allow to access the variable outside the scope. This issue is called scope issue.
// That means variables declared with var keyword are not block scoped, but they are function scoped.
