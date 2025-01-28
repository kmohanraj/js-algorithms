const missing_number = (arr) => {
  let n = arr.length + 1;
  let sum = 0;
  let expectedSum = n * (n+1) / 2
  for (let i = 0, len = arr.length; i < len; i++) {
    sum += arr[i]
  }
  console.log(expectedSum, sum)
  return expectedSum - sum;
}

console.log(missing_number([5, 2, 6, 1]))