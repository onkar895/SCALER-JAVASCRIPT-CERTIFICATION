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
})
