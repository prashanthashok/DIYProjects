/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  if (nums.length < 1) return;

  let left = 0;
  let right = nums.length - 1;
  let curr = 0;

  while (curr <= right) {
    if (nums[curr] === 0) {
      swap(nums, left, curr);
      left++;
      curr++;
    } else if (nums[curr] === 2) {
      swap(nums, curr, right);
      right--;
    } else if (nums[curr] === 1) curr++;
  }
};

const swap = function(nums, left, right) {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
};
