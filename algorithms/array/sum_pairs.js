Method1:

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i,j]
      }
    }
  }
}

console.log(twoSum([2,7,11,15], 9))

// Output => [ 0, 1 ]


Method2:

const twoSum1 = (array, target) => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    let diff = target - array[i]
    if (map[diff] !== undefined) {
      return [map[diff], i]
    }
    map[array[i]] = i
  }
}

console.log(twoSum1([2,7,11,15], 9))

// Output => [ 0, 1 ]

Method3:

const twoSum2 = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    const diff = target - array[i]
    if (array.slice(i+1).includes(diff)) {
      return [i, array.indexOf(diff)]
    }
  }
}

console.log(twoSum2([2,7,11,15], 9))

// Output => [ 0, 1 ]