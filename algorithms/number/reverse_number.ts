// Reverse Number

const reverse_number = (number) => {
  let result = 0
  if (!Number.isInteger(number)) {
    return 'Invalid number'
  }
 
  while (number !== 0) {
    let last_number = number % 10;
    result = (result * 10) + last_number
    number = Math.floor(number / 10);
  }
  return result;
}

console.log(reverse_number(123456))