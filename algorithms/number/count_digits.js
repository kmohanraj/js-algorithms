const count_digits = (number) => {
  let count = 0;
  let temp = number;
  if (number === 0) {
    return 1;
  }
  while (temp !== 0) {
    count += 1;
    temp = Math.floor(temp / 10);
  }
  return count;
}

console.log(count_digits(1_234_567))
