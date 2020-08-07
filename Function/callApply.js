color = 'blue'

let o = {
  color: 'red'
}

function sayColor() {
  console.log(this.color)
}
sayColor() // blue
sayColor.call(global) // blue
sayColor.call(o) // red