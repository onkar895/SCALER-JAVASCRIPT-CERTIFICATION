// Reading the file synchronously :

// fs - file system module. It used to read and write the particular files.
// import the module fs
const fs = require('fs')

console.log('First Line')

// readFileSync : It is used to read the contents of a file synchronously. This means that when readFileSync is called, the execution of the program halts until the file is completely read and its contents are available.
let data = fs.readFileSync('./Files/t1.txt', 'utf8')
console.log(data)

// But what if this data is too large, so it will take some to execute the last line right. So thats why we use Async Programming to read the data quickly.

console.log('Last Line')
