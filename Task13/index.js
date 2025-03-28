function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function printPrimeNumber(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) console.log(i);
  }
}

printPrimeNumber(10);
