function findMaxNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  console.log(max);
}

findMaxNumber(3, 5, 2); //5
