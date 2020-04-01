/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length < 1) return;

  let left = 0;
  let right = nums.length - 1;

  let id1 = normalBinarySearch(nums, left, right, target);
  let id2 = invertedBinarySearch(nums, left, right, target);

  console.log(id1);
  console.log(id2);
  return id1 ? id1 : id2;
};

const normalBinarySearch = function(nums, left, right, target) {
  while (left <= right) {
    let mid = left + (right - left) / 2;
    if (target == nums[mid]) return mid;
    if (target < nums[mid]) {
      right = mid - 1;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    }
  }
};

const invertedBinarySearch = function(nums, left, right, target) {
  while (left <= right) {
    let mid = left + (right - left) / 2;
    if (target == nums[mid]) return mid;
    if (target < nums[mid]) {
      left = mid + 1;
    }
    if (target > nums[mid]) {
      right = mid - 1;
    }
  }
};

let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
console.log(search(nums, target));
