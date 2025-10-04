// ----------------------------Binary Search----------------------------

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // return position if found
    } else if (arr[mid] < target) {
      start = mid + 1; // search right side
    } else {
      end = mid - 1; // search left side
    }
  }

  return -1; // not found
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 10));
