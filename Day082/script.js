// IIFE Syntax
// async function sleep() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(45);
//     }, 1000);
//   });
// }

// (async function main() {
//   let a = await sleep();
//   console.log(a);
//   let b = await sleep();
//   console.log(b);
// })();

// Destructuring
// let x,y = [1,5]
// console.log(x,y);

// let [x,y] = [1,5]
// console.log(x,y);

// let [x, y] = [1, 5, 6, 7];
// console.log(x);
// console.log(y);

// let [x, y, ...rest] = [1, 5, 6, 7];
// console.log(x);
// console.log(y);
// console.log(rest);

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// let {a,b,c} = obj
// console.log(a);
// console.log(b);
// console.log(c);

// Spread Syntax
// function sum(a, b, c){
//     return a+b+c
// }

// let arr = [1,4,6]
// console.log(arr[0]+arr[1]+arr[2])
// console.log(sum(arr[0],arr[1],arr[2]))
// console.log(sum(...arr))

// Local, Global and Block Scope

// Hoisting
// This is refer to the process whereby the interpreter move the declerations to the top of the code before execution.
// works on var only not on let and const

// works on functions as well but not on const functions
hello("Hello");
function hello(text) {
  console.log(text);
}
