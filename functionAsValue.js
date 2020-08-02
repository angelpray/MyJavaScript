let data = [
  {name: 'avs', age: 21},
  {name: 'ocl', age: 19}
]

function createComparisonFunction(propertyName) {
  return function(object1, object2) {
    let value1 = object1[propertyName];
    let value2 = object2[propertyName];
    if (value1 > value2) {
      return 1;
    } else if (value1 < value2) {
      return -1;
    } else {
      return 0;
    }
  }
}

data.sort(createComparisonFunction('name'))
console.log(data[0]);
data.sort(createComparisonFunction('age'))
console.log(data[0]);