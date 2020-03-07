const non_repeat_substring = function(str) {
  // TODO: Write your code here

  if (str.length < 1) return 0;

  let maxLength = 0;

  let start = 0;
  let end = 0;
  let map = new Map();

  for (end; end < str.length; end++) {
    if (!map.has(str[end])) {
      map.set(str[end], end);
    } else {
      start = Math.max(start, map.get(str[end]) + 1);
      map.set(str[end], end);
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

console.log(
  `Length of the longest substring: ${non_repeat_substring("aabccbb")}`
);
console.log(
  `Length of the longest substring: ${non_repeat_substring("abbbb")}`
);
console.log(
  `Length of the longest substring: ${non_repeat_substring("abccde")}`
);
