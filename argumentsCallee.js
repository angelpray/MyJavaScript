function factorial(num) {
  console.log(this)
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}
console.log(factorial(5));