global.name = 'global'
global.age = 23
global.color = 'red'
var o  = {
  name: 'myObject',
  age: 21,
  color: 'blue',
  getAge() {
    return this.age
  },
  getName() {
    return function() {
      return this.name
    }
  },
  getColor() {
    // use var that to store this
    var that = this
    return function() {
      return that.color
    }
  }
}
console.log(o.getAge()) // 21
console.log((o.getAge)()) // 21
console.log((o.getAge = o.getAge)()) // 23
console.log(o.getName()()); // global
console.log(o.getColor()()) // blue