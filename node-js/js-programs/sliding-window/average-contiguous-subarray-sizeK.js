function find_averages_of_subarrays(K, arr) {
  const result = [];
  //   for (i = 0; i < arr.length - K + 1; i++) {
  //     // find sum of next 'K' elements
  //     sum = 0.0;
  //     for (j = i; j < i + K; j++) {
  //       sum += arr[j];
  //     }
  //     result.push(sum / K); // calculate average
  //   }

  if (arr.length < K) return;
  //   let sum = 0;
  //   let r = 0;

  //   for (r; r < K; r++) {
  //     sum += arr[r];
  //   }
  //   result.push(sum / K);
  //   let l = 1;
  //   while (r < arr.length) {
  //     sum = sum + arr[r] - arr[l - 1];
  //     result.push(sum / K);
  //     l++;
  //     r++;
  //   }

  let start = 0;
  let end;
  let sum = 0;
  for (end = 0; end < arr.length; end++) {
    sum += arr[end];
    if (end - start + 1 >= K) {
      result.push(sum / K);
      sum = sum - arr[start];
      start++;
    }
  }

  return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`); //[2.2,2.8,2.4,3.6,2.8]
