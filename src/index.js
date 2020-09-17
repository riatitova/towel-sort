
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  let reverse = [];
  if (typeof matrix == 'undefined' || matrix.length == 0) return [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 == 0) {
        arr.push(matrix[i][j]);
      } else {
        if (j == 0) {
          reverse = matrix[i].reverse();
        }
        arr.push(reverse[j]);
      }
    }
    
  }
  return arr;
}

