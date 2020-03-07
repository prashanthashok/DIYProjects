const max_sub_array_of_size_k = function(k, arr) {
  // TODO: Write your code here

  if (arr.length < k) return -1;

  if (arr.length < 2) return arr[0];

  let start = 0;
  let end;
  let newSum = 0;
  let maxSum = 0;

  for (end = 0; end < arr.length; end++) {
    // find sum of sub array
    newSum += arr[end];

    if (end - start + 1 >= k) {
      // calculate sum of new sub array

      // if new sum > old sum
      maxSum = Math.max(maxSum, newSum);
      newSum = newSum - arr[start];
      // increase window start
      start++;
    }
  }

  return maxSum;
};

let arr = [2, 1, 5, 1, 3, 2];

let k = 3;

let maxArray = max_sub_array_of_size_k(k, arr);

console.log(maxArray);
