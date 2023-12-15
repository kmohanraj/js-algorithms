const diagonalDifference = (arr) => {  
  let left = 0;
  let right = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i === j) {
            left += arr[i][j]
        }
        if (i === arr.length - j - 1) {
            right += arr[i][j]
        }
    }
  }
  return left > right ? left - right : right - left
}

const matrix = [
  3,
  [11, 2, 4,],
  [4, 5, 6],
  [10, 8, -12]
]
console.log(diagonalDifference(matrix))
