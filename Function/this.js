// this in standard function
window.color = 'blue'

let o = {
  color: 'red'
}

function sayColor() {
  console.log(this.color)
}
sayColor() // blue

o.sayColor = sayColor;
o.sayColor(); // red

// this in arrow function
window.color = 'blue'
let o = {
  color: 'red'
}
let sayColor = () => {
  console.log(this.color)
}
sayColor() // blue
o.sayColor = sayColor
o.sayColor() //blue

// this in the event or timeout
function King() {
  this.royalName = 'sox'
  setTimeout(() => {
    // this will be the King distance
    console.log(this.royalName)
  })
}
function Queen() {
  this.royalName = 'lxe'
  setTimeout(function() {
    // this will be the window object
    console.log(this.royalName)
  })
}
new King() // sox
new Queen() //undefined