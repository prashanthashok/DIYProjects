/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  //if(nums.length < 2) return 0;
  if (nums.length < 2) {
    return nums[0] == 0 ? 1 : 0;
  }

  //we will use sum of sequence to determine missing number - this is called Gauss formula
  //Expected Sum = n(n+1)/2
  //missing number = Expected sum - Actual sum of our series

  const expectedSum = (nums.length * (nums.length + 1)) / 2;

  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  const missingNumber = expectedSum - actualSum;

  return missingNumber == 0 ? 0 : missingNumber;
};
