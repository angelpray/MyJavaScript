var scores = [60, 50, 60, 58, 54, 54,
  58, 50, 52, 54, 48, 69,
  34, 55, 51, 52, 44, 51,
  69, 64, 66, 55, 52, 61,
  46, 31, 57, 52, 44, 18,
  41, 53, 55, 61, 51, 44
];
var i;
var maxScore = Math.max(...scores);
var index = [];
for (i = 0; i <= scores.length - 1; i++) {
  if (scores[i] === maxScore) {
    index[index.length] = "#" + i;
  }
  console.log(`泡泡配方 #${i+1} score: ${scores[i]}`)
}
console.log(index)
console.log(`泡泡个数: ${scores.length}`)
console.log(`最高分泡泡: ${maxScore}`)
console.log(`得分最高的解决方案: ${index}`)