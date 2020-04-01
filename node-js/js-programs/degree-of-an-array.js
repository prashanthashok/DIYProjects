/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  if (nums.length < 1) return;
  let maxElement = findMaxFreqElement(nums);
  return maxElement;
};

const findMaxFreqElement = function(nums) {
  let map = new Map();
  let maxElement;

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
      maxElement = nums[i];
    }

    if (map.get(nums[i]) > map.get(maxElement)) {
      maxElement = nums[i];
    }
  }
  return maxElement;
};

let nums = [1, 2, 2, 3, 1, 4, 2];
console.log(findShortestSubArray(nums));
