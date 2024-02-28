// The 'for of'statememnt creates a loop iterating over iterable objects
// including build-in string, Array, array-like objects like nodelist and also map and set

var scores = [60, 70, 90, 75]

// syntax
for (var score of scores) {
  console.log(score)
}

// The only difference in 'ForIn & ForOf' loop is that in ForIn loop, variable score is taking a particular index or keys. But in ForOf loop, var score taking a actual value in the array.

// So what If I want to indicate the index of an array or object key using ForOf Loop
// So for that, there is a method known as "entries()"

// Method for getting index or keys :
let colors = ['Red', 'White', 'Blue']

for (var [index, color] of colors.entries()) {
  console.log(index + ` -> ` + color)
}
// var [index, color] = colors.entries()
// The entries() method is used to get an iterator object for the array, which returns an array with index-value pairs.

// ForOf using Strings to get every character from the string:
var str = 'Onkar'

for (var c of str) {
  console.log(c)
}
