const staircase = (n) => {
  let output = ''
  for (let i = 0; i < n; i++) {
      for (let j = n - 1; j > i; j--) {
      output += ' '
      }
      for (let k = 0; k <= i; k++) {
      output += '#'
      }
      if (i != n-1) {
          output += '\n'   
      }

  }
  return output;

  // let j = '#';
  // let i = 1;
  // let myStair = '';
  // while (i <= n) {
  //   myStair += '\n' + j
  //   j += '#';
  //   i++
  // }
  // return myStair

  // let line = ''
  // for (let i = 0; i < n +1; i++) {
  //   line += Array(n-i).fill(' ').join('')
  //   line += Array(i).fill('#').join('')
  //   console.log(line)
  //   line = ''
  // }
  // return line;

  for (let i = 0; i < n; i++) {
    console.log('----i--n', i, n)
    // output += '#'
    for (let j = n-1; j >= i; j--) {
      output += ''
    }
    for (let k = 0; k <= i; k++) {
      output += '#'
    }
    output += '\n'
  }
  return output
}

console.log(staircase(6))
