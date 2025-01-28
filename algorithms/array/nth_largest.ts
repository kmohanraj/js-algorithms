// Nth Largest Number

const nth_largest = (arr, nth) => {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i-1]) {
        let temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
        isSorted = false
      }
    }
  }
  return arr[arr.length - nth]
}

const numArray = [4,8,45,33,22]
console.log(nth_largest(numArray, 1))