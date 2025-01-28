const find_largest_number = (arr) => {
  let largest = arr[0]
  for (let num of arr) {
    if (num > largest) {
      largest = num
    }
  }
  return largest;
}

console.log(find_largest_number([10,23,56,99,102,3]))