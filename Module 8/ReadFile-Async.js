// Reading the file Asynchronously :

const fs = require('fs')

console.log('before')

// readFile : Asynchronously reads the entire contents of a file. So, basically it will take the callback function
fs.readFile('./Files/t1.txt', cb1)

function cb1 (err, data) {
  if (err) {
    console.log(err)
  }
  console.log(data.toString()) // Convert Buffer to string
}
// Now here you can see that before reading the file it has executed the 'before and after reading the file it quickly executed after and not waited for the cb1 function to be executed. Instead cb1 callback function waited to be reading the all file data from the program and then executed the function.
console.log('after')
