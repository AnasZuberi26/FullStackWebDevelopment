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

// let arr1 = [2, 5, 6];
// let arr2 = [1, 3, 4, 8];
// let merge = new Array(arr1.length + arr2.length);

// let i = j = k = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     merge[k] = arr1[i];
//     i++;
//     k++;
//   } else {
//     merge[k] = arr2[j];
//     j++;
//     k++;
//   }
// }

// while (i < arr1.length) {
//   merge[k] = arr1[i];
//   i++;
//   k++;
// }

// while (j < arr2.length) {
//   merge[k] = arr2[j];
//   j++;
//   k++;
// }

// console.log("Array 1: " + arr1);
// console.log("Array 2: " + arr2);
// console.log("Merged Array: " + merge);

// ------------------------Buy and Sell Stocks------------------------

// let prices = [7,1,3,4,6,5];
// let maxProfit = 0;
// let min = prices[0];

// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] < min) {
//     min = prices[i];
//   }
//   let profit = prices[i] - min;
//   maxProfit = Math.max(maxProfit, profit);
// }

// console.log(maxProfit);

// ------------------------Sort the colors------------------------

// let arr = [2, 1, 1, 0, 1, 2, 0, 1, 0, 2, 1, 1, 0];

// let i = 0,
//   j = 0;
// let k = arr.length - 1;

// while (i <= k) {
//   if (arr[i] === 0) {
//     let temp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = temp;
//     i++;
//     j++;
//   } else if (arr[i] === 2) {
//     let temp = arr[k];
//     arr[k] = arr[i];
//     arr[i] = temp;
//     k--;
//   } else {
//     i++;
//   }
// }

// console.log(arr);

// ------------------------Maximum Subarray------------------------

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// let maxSoFar = arr[0];
// let currentSum = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   // console.log(arr[i], +(currentSum + arr[i]));
//   currentSum = Math.max(arr[i], currentSum + arr[i]);
//   maxSoFar = Math.max(maxSoFar, currentSum);
//   // console.log(currentSum);
//   // console.log(maxSoFar);
// }

// console.log("Maximum Subarray Sum:", maxSoFar);

// ------------------------Maximum Appearance------------------------

// let arr = [2, 2, 1, 1, 1, 2, 2];

// let candidate = null;
// let count = 0;

// // Phase 1: Find a candidate
// for (let i = 0; i < arr.length; i++) {
//   if (count === 0) {
//     candidate = arr[i];
//     count = 1;
//   } else if (arr[i] === candidate) {
//     count++;
//   } else {
//     count--;
//   }
// }

// // Phase 2: Verify candidate (optional)
// count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === candidate) count++;
// }

// if (count > arr.length / 2) {
//   console.log("Majority element is:", candidate);
// } else {
//   console.log("No majority element exists");
// }

// ------------------------Traping rain water------------------------

let height = [0,1,0,2,1,0,1,3,2,1,2,1];

let left = 0;
let right = height.length - 1;
let leftMax = 0;
let rightMax = 0;
let water = 0;

while (left < right) {
  if (height[left] < height[right]) {
    if (height[left] >= leftMax) {
      leftMax = height[left];
    } else {
      water += leftMax - height[left];
    }
    left++;
  } else {
    if (height[right] >= rightMax) {
      rightMax = height[right];
    } else {
      water += rightMax - height[right];
    }
    right--;
  }
}

console.log("Trapped Water:", water);
