// ************************Maths Problems************************

// --------------------------GCD / HCF--------------------------

// Method-1

// let a = 28;
// let b = 35;

// while (a != b) {
//   if (a > b) {
//     a = a - b;
//   } else {
//     b = b - a;
//   }
// }

// console.log(a);

// Method-2

// let a = 20;
// let b = 32;

// function findHCF(a, b) {
//   if (a == b) {
//     return a;
//   }
//   if (a > b) {
//     return findHCF(a - b, b);
//   } else {
//     return findHCF(a, b - a);
//   }
// }

// console.log(findHCF(a,b));

// Method-3

// let a = 21;
// let b = 35;

// function findHCF(a, b) {
//   if (b == 0) {
//     return a;
//   }
//   return findHCF(b, a % b);
// }

// console.log(findHCF(a, b));

// --------------------------Factors of a number--------------------------

// let n = 30;

// for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
//   if (n % i == 0) {
//     process.stdout.write(i + " ");
//   }
// }

// for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
//   if (n % i == 0) {
//     if (n / i != i) {
//       process.stdout.write(n / i + " ");
//     }
//   }
// }

// --------------------------Count of Prime(Seive of Eratosthene)--------------------------

// let n = 45;
// // create an array filled with true values
// let isPrime = new Array(n + 1).fill(true);
// // isPrime[0] = false; // 0 is not prime
// // isPrime[1] = false; // 1 is not prime

// for (let p = 2; p * p <= n; p++) {
//   if (isPrime[p]) {
//     // mark all multiples of p as not prime
//     for (let multiple = p * p; multiple <= n; multiple += p) {
//       isPrime[multiple] = false;
//     }
//   }
// }

// // print all primes
// for (let i = 2; i <= n; i++) {
//   if (isPrime[i]) {
//     process.stdout.write(i + " ");
//   }
// }

// --------------------------Power(x,n)--------------------------

function power(x, n) {
  if (x == 0) return 1;
  let ans = temp(x, n);
  return n < 0 ? 1 / ans : ans;
}

var temp = function (x, n) {
  if (n == 0) return 1;
  let ans = temp(x, parseInt(n / 2));
  if (n % 2 == 0) return ans * ans;
  return ans * ans * x;
};

console.log(power(2,10));