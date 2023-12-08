const find_duplicates_count = (arr) => {
  let count = {};
  arr.forEach((i) => {
    count[i] = (count[i] || 0) + 1
  });
  return count;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 5, 9, 1, 2];
console.log(find_duplicates_count(arr));