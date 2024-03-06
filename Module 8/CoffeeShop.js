// CoffeeShop :

const PlaceOrder = (drink) => {
  return new Promise((resolve, reject) => {
    if (drink === 'coffee') {
      resolve('Order for coffee recieved')
    } else {
      reject('Other orders rejected')
    }
  })
}

const processOrder = (order) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Order is being processed')
      setTimeout(() => {
        resolve(`${order} and is Served`)
      }, 5000)
    }, 3000)
  })
}

PlaceOrder('coffee').then((orderPlaced) => {
  console.log(orderPlaced)
  let orderIsProcessed = processOrder(orderPlaced)
  return orderIsProcessed
}).then((processedOrder) => {
  console.log(processedOrder)
})
