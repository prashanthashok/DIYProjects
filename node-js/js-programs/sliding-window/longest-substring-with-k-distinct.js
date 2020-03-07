const longest_substring_with_k_distinct = function(str, k) {
  // TODO: Write your code here

  if (str.length < 1) return -1;
  if (k < 1) return -1;

  let windowStart = 0;
  let windowEnd = 0;
  let maxLength = 0;
  let numDistinct = 0;

  let frequencyMap = new Map();

  for (windowEnd; windowEnd < str.length; windowEnd++) {
    if (!frequencyMap.has(str[windowEnd])) {
      frequencyMap.set(str[windowEnd], 1);
      numDistinct++;
    } else {
      frequencyMap.set(str[windowEnd], frequencyMap.get(str[windowEnd]) + 1);
    }
    while (numDistinct > k) {
      // decrement char count of exit character
      frequencyMap.set(
        str[windowStart],
        frequencyMap.get(str[windowStart]) - 1
      );
      if (frequencyMap.get(str[windowStart]) == 0) {
        // delete key from map if char count reaches zero and reduce numDistinct
        frequencyMap.delete(str[windowStart]);
        numDistinct--;
      }
      // advance window start
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    2
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    1
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "cbbebi",
    3
  )}`
);
