const smallest_subarray_with_given_sum = function(s, arr) {
  // TODO: Write your code here

  if (arr.length < 1) return -1;

  if (arr[0] >= s || arr[arr.length - 1] >= s) return 1;

  let minLength = 0;

  let left = 0;
  let right;
  let result;
  let currLength;
  let sum = arr[left];

  for (right = 1; right < arr.length; right++) {
    sum += arr[right];
    if (sum >= s) {
      minLength = right - left + 1;
      break;
    }
  }
  if (minLength < 1) return minLength; //The whole array does not add up to s, return 0
  currLength = minLength;
  sum -= arr[left++];
  ++right;
  for (right; right < arr.length; right++) {
    sum += arr[right];
    if (sum >= s) {
      minLength = Math.min(minLength, currLength);
      sum -= arr[left];
      left++;
    }

    if (sum < s) {
      currLength = right - left + 1;
    }
  }

  return minLength;
};

let size = smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]);
