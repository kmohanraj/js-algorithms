const prime_number = (num) => {
  if (num <= 1) {
    return false
  }
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
}

console.log(prime_number(10))