const remove_duplicates = function(arr) {
  // TODO: Write your code here

  if (arr.length < 1) return -1;

  if (arr.length < 2) return arr;

  let left = 1;
  let right = 1;
  for (right; right < arr.length; right++) {
    if (arr[left - 1] !== arr[right]) {
      arr[left] = arr[right];
      left++;
    }
  }
  return left;
};
