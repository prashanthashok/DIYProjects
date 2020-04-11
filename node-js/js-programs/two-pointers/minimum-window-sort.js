const shortest_window_sort = function (arr) {
  // TODO: Write your code here

  let start = 1;
  let end = arr.length - 2;

  while (start < arr.length - 1 && arr[start] >= arr[start - 1]) {
    start++;
  }

  if (start === arr.length - 1) {
    // if the array is sorted
    return 0;
  }

  while (end >= 0 && arr[end] <= arr[end + 1]) {
    end--;
  }

  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;

  for (let low = start; low <= end; low++) {
    min = Math.min(arr[low], min);
    max = Math.max(arr[low], max);
  }

  while (start > 0 && arr[start - 1] > min) {
    start--;
  }

  while (end < arr.length - 1 && arr[end + 1] < max) {
    end++;
  }

  return end - start + 1;
};
