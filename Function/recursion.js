// use named function expressions
const factorial = (function f(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
});

// argument.callee
function factorial() {
  if (num <= 1) {
    return 1;
  } else {
    // return num * factorial(num - 1);
    return num * arguments.callee(num - 1);
  }
}