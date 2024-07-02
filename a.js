function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
function isCircularPrime(num) {
  const digits = num.toString().split("");
  const originalNum = num;
  for (let i = 0; i < digits.length; i++) {
    num = parseInt(digits.join(""));
    if (!isPrime(num)) return false;
    digits.push(digits.shift());
  }
  return originalNum !== 1 && originalNum !== 4;
}
let count = 0;
for (let i = 2; i < 1000000; i++) {
  if (isCircularPrime(i)) {
    count++;
  }
}
console.log("Number of circular primes below one million:", count);
