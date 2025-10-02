// greet()

// function greet(){
//     console.log("Good Morning Pineapple");
//     enjoy()
// }

// function enjoy(){
//     console.log("Enjoy ho rha hai guys");
//     temp()
// }

// function temp(){
//     console.log("Kuch kar rhe ho");
// }

// -------------------------------Recursion-------------------------------

// function temp(n){
//     if(n==0){
//         return;
//     }
//     console.log(n);
//     temp(n-1)
// }

// temp(5)

// -------------------------------Recursion-------------------------------

// function temp(n) {
//   if (n == 0) {
//     return;
//   }
//   temp(n - 1);
//   console.log(n);
// }

// temp(5);

// -------------------------------Sum to the nth number-------------------------------

// function calSum(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n + calSum(n - 1);
// }

// console.log("sum is: " + calSum(7));

// -------------------------------Factorial-------------------------------

// function factorial(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log("Factorial is: " + factorial(5));

// -------------------------------Fibonacci N Terms-------------------------------

// function fibonnaciNTerms(n, first, second) {
//   if (n == 0) {
//     return;
//   }
//   let third = first + second;
//   process.stdout.write(third + " ");
//   fibonnaciNTerms(n-1, second, third);
// }

// let n = 10;
// process.stdout.write(0 + " " + 1 + " ");
// fibonnaciNTerms(n - 2, 0, 1);

// -------------------------------Fibonacci Nth Term-------------------------------

function fibonnaciNTerms(n) {
  if (n == 0 || n==1) {
    return n;
  } 
  return fibonnaciNTerms(n - 1) + fibonnaciNTerms(n - 2);
}

let n = 10;
console.log("The sum is " + fibonnaciNTerms(n-1));
