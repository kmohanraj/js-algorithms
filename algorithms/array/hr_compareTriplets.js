const compareTriplets = (a, b) => {
  console.log(a, b);
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice += 1;
    } else {
      if (a[i] !== b[i]) {
        bob += 1;
      }
    }
  }
  return [alice, bob];
};

const counter = () => {
  return;
};

const a = [5, 6, 7];
const b = [3, 6, 10];

console.log(compareTriplets(a, b));


