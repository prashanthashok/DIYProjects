/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  debugger;
  let soln = [];

  var permHelper = function(nums, n, i) {
    debugger;
    if (i == n) {
      //soln.push(nums);
      //console.log(nums);
      return [...nums];
    }

    for (let x = i; x < n; x++) {
      swap(nums, i, x);
      let sol = permHelper(nums, n, i + 1);
      if (sol) {
        soln.push(sol);
      }
      swap(nums, i, x);
    }
  };

  var swap = function(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  permHelper(nums, nums.length, 0, soln);
  return soln;
};

module.exports = permute;
