/*
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]

Sample Output

0.500000
0.333333
0.166667
*/

const plusMinus = (arr) => {
  let positive = 0
  let negative = 0
  let zero = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive += 1
    } else if (arr[i] < 0) {
      negative += 1
    } else {
      zero += 1
    }
  }
  return `${Number(positive / arr.length).toFixed(6)}\n${Number(negative / arr.length).toFixed(6)}\n${Number(zero / arr.length).toFixed(6)}`
}
const arr = [-4, 3, -9, 0, 4, 1]
console.log(plusMinus(arr))