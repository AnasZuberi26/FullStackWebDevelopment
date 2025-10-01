// ------------------------------Bubble Sort------------------------------

// let arr = [10, 5, 13, 12, 3];

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);

// ------------------------------Selection Sort------------------------------

// let arr = [10, 5, 1, 12, 3];

// for (let i = 0; i < arr.length - 1; i++) {
//   let min = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[min]) {
//       min = j;
//     }
//   }
//   let temp = arr[i];
//   arr[i] = arr[min];
//   arr[min] = temp;
// }

// console.log(arr);

// ------------------------------Insertion Sort------------------------------

let arr = [10, 5, 1, 12, 3];

for (let i = 1; i < arr.length; i++) {
  let key = arr[i];
  let j;
  for (j = i - 1; j >= 0 && arr[j] > key; j--) {
    arr[j + 1] = arr[j];
  }
  arr[j + 1] = key;
}

console.log(arr);
