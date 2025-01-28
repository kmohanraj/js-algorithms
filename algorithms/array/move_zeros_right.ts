const move_zeros_right = (arr) => {
  let i = 0;
  arr.forEach(e => {
    if (e !== 0) {
      arr[i] = e
      i++
    }
  });
  for (let j = i; j < arr.length; j++) {
    arr[j] = 0
  } 
  return arr
}

const input = [0, 1, 0, 3, 12]
console.log(move_zeros_right(input))

// Output => [ 1, 3, 12, 0, 0 ]