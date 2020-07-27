console.log((() => {}).name); // (empty string)
console.log((new Function()).name); // anonymous

function foo() {}
console.log(foo.bind(null).name); // bound foo
let dog = {
  years: 1,
  get age() {
    return this.years;
  },
  set age(newAge) {
    this.years = newAge;
  }
}
let propertyDescriptor = Object.getOwnPropertyDescriptor(dog, 'age');
console.log(propertyDescriptor.get.name); // get age
console.log(propertyDescriptor.set.name); // set age

// use arguments to access parameters
function sayHi(name, message) {
  console.log(`${name} and ${message}`)
}

function sayHiByArguments() {
  console.log(`${arguments[0]} and ${arguments[1]}`);
}
sayHi('zjr', 'love life')
sayHiByArguments('wes', 'love yourself')

function doAdd(num1, num2) {
  arguments[1] = 10;
  num1 = 20;
  console.log(arguments[0] + num2);
}
doAdd(1, 2)

function turnOn(machine) {
  console.log(typeof machine)
  machine.isOn = true}
var computer = {
  isOn: false
};

turnOn(computer);

console.log(computer.isOn); // false;

// DEFAULT PARAMETER VALUE
function sayhello(name) {
  name = (typeof name !== 'undefined') ? name : 'iox'
  return name;
}
var a = sayhello()
var b = sayhello('ols')

console.log(`a=${a}b=${b}`)

function sayhello(name = 'iox') {
  return name;
}