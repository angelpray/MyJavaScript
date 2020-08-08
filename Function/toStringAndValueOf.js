function test() {
  console.log('this is test')
}
console.log(test.toString()) //return the function's code
console.log(test === test.valueOf()) // true. simply returns the function itself.