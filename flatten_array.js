// Array Flatten

const flattenArray = (arr) => {
    let result = []
    arr.forEach((num) => {
      if (Array.isArray(num)) {                 // Or if (typeof num === 'object') 
        result.push(...flattenArray(num))
      } else {
        result.push(num)
      }
    })
    return result;
}

const arr = [1,2,[3,4], [5, [6, 7,[8,[9]]]]]

console.log(flattenArray(arr))