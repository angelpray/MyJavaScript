function fib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

// tail call optimization
"use strict";
// base case
function fib(n) {
  return fibImpl(0, 1, n);
}
// recursive case
function fibImpl(a, b, n) {
  if (n === 0) {
    return a;
  }
  return fibImpl(b, a + b, n - 1);
}