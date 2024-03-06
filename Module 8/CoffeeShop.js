// CoffeeShop : We have a coffeShope that only accepts the order for the coffee.

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

PlaceOrder('coffee').then((orderPlaced) => {
  console.log(orderPlaced)
  let orderIsProcessed = processOrder(orderPlaced)
  return orderIsProcessed
}).then((processedOrder) => {
  console.log(processedOrder)
}).catch((err) => {
  console.log(err)
})
// This is Known as Chaining of promise.

// Chaining promises: The main part of the code uses promises to handle asynchronous operations. Here's what it does:

// a. It starts by calling PlaceOrder('coffee'), which returns a promise. When this promise is resolved, it means the order for coffee is received.

// b. Then, it logs the message "Order for coffee received" to the console.

// c. Next, it calls processOrder(orderPlaced), passing the order received as a parameter. This returns another promise.

// d. When the second promise is resolved, it logs the message that the order is processed and served.

// so Here in the coffeeShop we only have 2 scenarios to handle, one is order recived and 2nd is order placed.
// But suppose we have a large scenario to handle what will we do? 
// So to avoid the promise chaining or to solve this scenario, we have one thing known as 'async-await.' 
