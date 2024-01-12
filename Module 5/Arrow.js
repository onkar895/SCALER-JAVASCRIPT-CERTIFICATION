// Normal Functions :

let text1 = function () {
  console.log(1)
}

let text2 = function (a) {
  console.log(a + 2)
}

let text3 = function (a, b) {
  console.log(a + b)
}

text1()
text2(3)
text3(4, 5)

// Callback Functions :
// A JavaScript callback is a function which is to be executed after another function has finished execution

// => : This arrow is known as 'fat arrow'

let call = () => {
  console.log('Onkar')
}

let call1 = (a) => {
  console.log('Onkar' + ' ' + a)
}

call()
call1('karale')
