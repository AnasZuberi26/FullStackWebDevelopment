// --------------------------Sum of Natural Numbers--------------------------

// let num = Number(prompt("Enter a Number: "));
// let fact = 0;

// if (isNaN(num)) {
//   console.log("Invalid Input");
// } else if (num < 0) {
//   console.log("Input must be positive");
// } else if (num > 0) {
//   for (let i = 0; i <= num; i++) {
//     fact += i;
//   }
//   console.log("Sum: " + fact);
// } else {
//   console.log("Enter an input");
// }

// --------------------------Factorial of a Number--------------------------

// let num = Number(prompt("Enter a Number: "));
// let fact = 1;

// if (isNaN(num)) {
//   console.log("Invalid Input");
// } else if (num < 0) {
//   console.log("Input must be positive");
// } else if (num > 0) {
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   console.log("Factorial: " + fact);
// } else {
//   console.log("Enter an input");
// }

// --------------------------Factors of a Number--------------------------

// let num = Number(prompt("Enter a Number: "));

// for (let i = 1; i <= Math.floor(num / 2); i++) {
//   if (num % i == 0) {
//     console.log(i);
//   }
// }
// console.log(num);

// --------------------------Prime Number--------------------------

// let num = Number(prompt("Enter a Number: "));
// let count = 0;

// for (let i = 2; i <= Math.floor(num / 2); i++) {
//   if (num % i == 0) {
//     count += 1;
//   }
// }

// if(count == 0){
//     console.log('Prime Number');
// }else{
//     console.log('Not a Prime Number');
// }

// --------------------------Sum of a Number--------------------------

// let num = Number(prompt("Enter a Number: "));
// let sum = 0;

// while(num>0){
//         sum += num%10;
//         num = Math.floor(num/10)
// }

// console.log('Sum: ' +sum);

// --------------------------Reverse of a Number--------------------------

// let num = Number(prompt("Enter a Number: "));
// let reverse = 0;

// while (num > 0) {
//   rem = num % 10;
//   reverse = reverse*10 + rem;
//   num = Math.floor(num / 10);
// }

// console.log("Reverse: " + reverse);

// --------------------------Strong Number--------------------------

// let num = Number(prompt("Enter a Number: "));
// let num1 = num;
// let sum = 0;

// while (num >= 1) {
//   rem = num % 10;
//   let fact = 1;
//   while (rem >= 1) {
//     fact *= rem;
//     rem = rem - 1;
//   }
//   sum += fact;
//   num = Math.floor(num / 10);
// }

// if (sum == num1) {
//   console.log("This is a Strong Number: " + num1);
// } else {
//   console.log("Not a Strong Number");
// }

// --------------------------Guess Number--------------------------

let random = Math.floor(Math.random() * 100 + 1);
console.log(random)

console.log('');