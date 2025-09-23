// ---------------------------Array in JS---------------------------

// let arr = [];

// arr.push(100);
// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.push('Anas');
// arr.push(true);

// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;

// console.log(arr[0]);
// console.log(arr);
// arr.pop()
// console.log(arr);

// ---------------------------Array in JS---------------------------

// let arr = new Array(3);

// We always prefer index assignment over push assignment in Array in JS
// arr.push(100);

// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;
// arr[4] = 50;

// console.log(arr);

// ---------------------------Array using prompt---------------------------

// let arr = new Array(5);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt(`Enter value for ${i + 1} index: `));
// }

// console.log(arr);

// ---------------------------Sum of Array---------------------------

// let arr = new Array(5);
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt(`Enter value for ${i + 1} index: `));
//   sum += arr[i];
// }

// console.log("Array: " + arr);
// console.log("Sum: " + sum);

// ---------------------------Max in Array---------------------------

// let arr = [19, 32, 55, 98, 28];
// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log("Array: " + arr);
// console.log("Maximum: " + max);

// ---------------------------2nd Max in Array---------------------------

// let arr = [19, 32, 55, 98, 28];

// let max = Math.max(arr[0], arr[1]);
// let second_max = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     second_max = max;
//     max = arr[i];
//   } else if (arr[i] > second_max && arr[i] < max) {
//     second_max = arr[i];
//   }
// }

// console.log("Array: " + arr);
// console.log("First Maximum: " + max);
// console.log("Second Maximum: " + second_max);

// ---------------------------Reverse of Array---------------------------

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [];

// let j = 0;

// for (let i = arr1.length - 1; i >= 0; i--) {
//   arr2[j] = arr1[i];
//   j++;
// }

// console.log(arr1);
// console.log(arr2);

// ---------------------------Reverse of Array---------------------------

// let arr = [1, 2, 3, 5, 6];

// console.log(arr);

// let i = 0,
//   j = arr.length - 1;

// while (i != j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }

// console.log(arr);

// ---------------------------Binary Array Sorting---------------------------

let arr = [0, 1, 1, 0, 1, 0, 0, 1];
console.log(arr);

let j = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    j++;
  }
}
console.log(arr);
