// ------------------------Left rotation by 1------------------------

// let arr = [1, 2, 3, 4, 5];
// let copy = arr[0];

// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy;

// console.log(arr);

// ------------------------Right rotation by 1------------------------

// let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length - 1];

// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = copy;

// console.log(arr);

// ------------------------Left rotation by k Elements------------------------

// let arr = [1, 2, 3, 4, 5];

// for (let j = 0; j < 3; j++) {
//   let copy = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
// }

// console.log(arr);

// ------------------------Right rotation by k Elements------------------------

let arr = [1, 2, 3, 4, 5];

for (let j = 0; j < 2; j++) {
  let copy = arr[arr.length-1];
  for (let i = arr.length-1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = copy;
}

console.log(arr);