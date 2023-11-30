// Array sorting

const sorting = (arr) => {
  let isSorted = false;
  arr = [...new Set(arr)] // It is used remove duplicates
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i-1]) {
        let temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
        isSorted = false
      }
    }
  }
  return arr;
}

const arr = [1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9]
console.log(sorting(arr))