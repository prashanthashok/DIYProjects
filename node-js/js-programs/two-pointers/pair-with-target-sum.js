const pair_with_targetsum = function(arr, target_sum) {
  // TODO: Write your code here
  if (arr.length < 1) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum > target_sum) {
      right--; // we need a pair with a smaller sum
    } else if (sum < target_sum) {
      left++; // we need a pair with a bigger sum
    } else {
      // sum found
      return [left, right];
    }
  }

  return [-1, -1];
};
