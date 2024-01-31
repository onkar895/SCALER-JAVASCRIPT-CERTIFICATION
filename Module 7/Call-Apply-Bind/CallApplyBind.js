// Why we need this call, apply and bind :

let Person1 = {
  fname: 'onkar',
  lname: 'karale',
  age: 24,

  printDetails: function () {
    console.log(`Hi I am ${this.fname} ${this.lname} and my age is ${this.age}`)
  }

}

let Person2 = {
  fname: 'RAJ',
  lname: 'malhotra',
  age: 34,

  printDetails: function () {
    console.log(`Hi I am ${this.fname} ${this.lname} and my age is ${this.age}`)
  }

}

Person1.printDetails()
Person2.printDetails()

// So here in the above code , you can see that I am using the same method as printDetails that is repeating. But the dry rule states that you should not repeat the same method.

// So what we can do here, so that we don't need to repeat the functions for every single object.
// We can use Call, apply and bind.
