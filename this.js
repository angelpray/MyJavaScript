window.color = 'blue'

let o = {
  color: 'red'
}

function sayColor() {
  console.log(this.color)
}
sayColor()

o.sayColor = sayColor;
o.sayColor();