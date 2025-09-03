function calculateFactorial(num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
}

num = 5;
let fact = calculateFactorial(num);
console.log(`The factorial of ${num} is ${fact}`);
