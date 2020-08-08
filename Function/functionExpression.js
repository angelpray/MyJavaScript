// function declaration hoisting
sayHi()
function sayHi() {
  console.log('hi')
}

// never do this
if (condition) {
  function sayHi() {
    console.log('hi')
  }
} else {
  function sayHi() {
    console.log('yo')
  }
}

// OK. Behave the same as above
let sayHi;
if (condition) {
  sayHi = function() {
    console.log('hi')
  }
} else {
  sayHi = function() {
    console.log('yo')
  }
}