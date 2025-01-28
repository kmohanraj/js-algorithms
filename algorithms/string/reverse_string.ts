const reverse_string = (str) => {
  if (!str) {
    return 'Not a string'
  }
  let i = 0
  let result = ''
  while (i < str.length) {
    result = str[i] + result
    i++
  }
  return result;
}

const reverse = "silent"
console.log(reverse_string(reverse))