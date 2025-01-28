const anagrams = (str1, str2) => {
  const a = removeSpace(str1)
  const b = removeSpace(str2)
  if (sortString(a) === sortString(b)) {
    return `${a} and ${b} is anagrams`
  } else {
    return `${a} and ${b} is anagrams`
  }
}

const removeSpace = (str) => {
  return str.replace(/\s/g, '')
}

const sortString = (str) => {
  return str.split('').sort().join('')
}