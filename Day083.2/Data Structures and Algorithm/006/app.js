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

// let arr = [1, 2, 3, 4, 5];

// for (let j = 0; j < 2; j++) {
//   let copy = arr[arr.length-1];
//   for (let i = arr.length-1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = copy;
// }

// console.log(arr);

// ------------------------Remove Duplicates from Array------------------------

// let arr = [1, 1, 1, 2, 2, 2, 3, 4, 12, 12, 12, 5, 1, 2, 3, 4, 5, 6, 6];

// console.log("Array before removal:", arr);

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       console.log("Duplicate found and removed " + arr[j]);
//       arr.splice(j, 1);
//       j--;
//     }
//   }
// }

// console.log("Array after removal:", arr);

// ------------------------Merge Sorted Array------------------------

let arr1 = [2, 5, 6];
let arr2 = [1, 3, 4, 8];
let merge = new Array(arr1.length + arr2.length);

let i = j = k = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    merge[k] = arr1[i];
    i++;
    k++;
  } else {
    merge[k] = arr2[j];
    j++;
    k++;
  }
}

while (i < arr1.length) {
  merge[k] = arr1[i];
  i++;
  k++;
}

while (j < arr2.length) {
  merge[k] = arr2[j];
  j++;
  k++;
}

console.log("Array 1: " + arr1);
console.log("Array 2: " + arr2);
console.log("Merged Array: " + merge);
