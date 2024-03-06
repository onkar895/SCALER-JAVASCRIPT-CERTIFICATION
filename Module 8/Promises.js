// Promise :

// Introduction :
// Promises provide a more elegant way of handling the asynchronous operations compared to callback functions.
// By creating a promise, you are essentially telling the JavaScript engine to "promise" to perform a specific action and notify you once it is completed or fails. The code either executes or fails , in both the cases subscriber will be notified.
// Next, callback functions are then attached to the promise to handle the outcome of the action. These callbacks will be invoked when the promise is fulfilled (action completed successfully) or rejected (action failed).
//

// To understand more about promises, let's look at an example from the actual world.
// Assume for the moment that my mother constantly complains me for not bringing the groceries from the market or breaking her promise.
// But Now again I promise her that I will bring the groceries from the market tomorrow.
// 1. Now here if you see, the promise I have made just now, its not completed either its not started yet, that means the promise is in the 'pending state'.
// 2. If I'm successful to bringing that groceries or if I'm successful to complete the task that I have promised for that means its 'fulfilled'.
// 3. And if for some reason I forgot to bring the groceries or unable to fulfill that promise then it goes into the 'rejected state'.
// 4. All the three state are completed and in that three states only 1 state will run and that means the promise has finished or 'settled'.

// So if you see in the above example that promises have four states :
// 1. pending : initial state, neither fulfilled nor rejected.
// 2. Fulfilled :  meaning that an operation was completed successfully.
// 3. Rejected : meaning that an operation failed.
// 4. Settled

// How to produce a promise :

// To create a promise, you'll have to create a new instance of the Promise object by calling the Promise constructor.
// The constructor takes a single argument: a function called 'executor.' The "executor" function is called immediately when the promise is created, and it takes two arguments: a 'resolve' function and a 'reject' function.
// resolve and reject are two callbacks provided by javascript engine itself.
//  1. resolve(value): If the job is finished succesfully. 
//  2. reject(error): If the job fails or gets an error message.

// syntax : let promise = new Promise((resolve, reject) => {})
// So basically promise takes two inbuild methods which are resolve and reject which are taken as a callback function.
let myPromise = new Promise((resolve, reject) => {

  const a = 4
  const b = 4

  setTimeout(() => {
    if (a === b) {
      resolve('The values are equal')
    }else {
      reject('The values are not equal')
    }
  }, 2000)
})

// So here in the above code the promise is still in the process that means its in the pending state. Its still not gone in the setTimeout, it's actually building right now. because the promise is in the process of checking that if this two values are equal to or not. It hasn't given us any output right now. That's why the promise right now is in the pending state. This is because nothing has been set up for the promise object yet, so it's going to sit there in a pending state forever without any value or result.
// So how you can actually resolve and reject this promise. how you will get the output, so for that we have some specific methods which are related to the promise which are resolve and reject.
// Those two methods are then and catch.
// So resolve and reject are basically execute your promise or actually to get the output you need to use two other methods which are then and catch.

// pending state
console.log(myPromise)

// fulfilled - then method
myPromise.then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
})
//  The .then method is called when a promise is fulfilled.
// and the .catch method is called when a promise is rejected.
// Once the promise is fulfilled, the .then callback method will be called with the resolved value. 
// And if the promise is rejected, the .catch method will be called with an error message.
// You can also add the .finally() method, which will be called after a promise is settled. 
// This means that .finally() will be invoked regardless of the status of a promise (whether resolved or rejected).
