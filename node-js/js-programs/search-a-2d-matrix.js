/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length < 1) return false;

  for (let i = 0; i < matrix.length; i++) {
    if (binarySearch(matrix[i], target)) return true;
  }
  return false;
  //     let left = 0;
  //     let right = matrix.length -1;
  //     let mid = left + (right-left)/2;

  //     if(matrix[mid] === target) return true;

  //     while(left <= right){
  //         if(target < matrix[mid][0]){
  //             right = mid - 1;
  //         } else {

  //         }
  //     }
};

const binarySearch = function(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) return true;
    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

// let matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ];

let matrix = [[1]];
let target = 1;
console.log(searchMatrix(matrix, target));
