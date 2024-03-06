// setTimeout:
// So setTimeout is a timer function.
// Timer functions means we can provide this functions a time and after the particular time it will execute whatever inside that function.
// setTimeout(cb, 2000) : Settimeout accepts two arguments : A callback function that is executed asynchronously & The minimal number of milliseconds a program waits before executing the callback function.

const greet = () => {
  console.log('HEYYYYYYYYYYYY')
  setTimeout(() => {
    console.log('Hello, Good Morining')
  }, 2000)
}

greet()
