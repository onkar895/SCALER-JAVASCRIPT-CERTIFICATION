// setInterval :

// setInterval means that it actually set an interval of time that after this particular interval your function will run again.
// It also accepts two arguments: A callback function that is executed asynchronously & the number of milliseconds for how frequently the callback function executes

const hello = () => {
  let timer = setInterval(() => {
    console.log('Hello')
  }, 1000)

  setTimeout(() => {
    clearInterval(timer)
  }, 3000)
}

// Inside this function, we call clearInterval(timer) to stop the interval set by setInterval, effectively stopping the repetitive logging of "Hello" to the console.

hello()
