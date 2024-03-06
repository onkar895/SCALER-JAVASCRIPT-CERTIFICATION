// Async-Await :

// 1. Async/Await is a feature that allows you to write asynchronous code in a more synchronous, readable way.
// 2. "Aync/Await" is a powerful tool for handling asynchronous operations. It allows for more readable and maintainable code by eliminating the need for callbacks and providing a more intuitive way to handle asynchronous operations.

// 1. async is a keyword that is used to declare a function as asynchronous.
// 2. await is a keyword that is used inside an async function to pause the execution of the function until a promise is resolved.

// Let's take the example of the coffeeShop again that we have solved by promises :

// Recieved the order :
const PlaceOrder = (drink) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (drink === 'coffee') {
        resolve('Order for coffee recieved')
      } else {
        reject('Other orders rejected')
      }
    }, 2000)
  })
}

// then processed and then served the order :
const processOrder = (order) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Order is being processed')
      setTimeout(() => {
        resolve(`${order} and is Served`)
      }, 6000)
    }, 4000)
  })
}

const serveOrder = async () => {
  try {
    let orderPlaced = await PlaceOrder('coffee')
    console.log(orderPlaced)
    let orderServed = await processOrder(orderPlaced)
    console.log(orderServed)
  } catch (error) {
    console.log(error)
  }
}

serveOrder()

// So if you see in the above code that how simply we have get the same output for the coffeeShop using async-await.
// You did not have to go through all that promise chaining and all that return statements and chain your promises continuously. 
// So to avoid the promise chaning, You just need to write async-await function and you just have to wait for promises to complete, then you will get the output.