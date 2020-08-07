color = 'blue'

var o = {
  color: 'red'
}

function sayColor() {
  console.log(this.color)
}

let objectSayColor = sayColor.bind(o)

sayColor() // blue
objectSayColor() //red