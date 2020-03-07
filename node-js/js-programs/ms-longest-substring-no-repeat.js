function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (A.length < 1) return;

  let fullString = "";

  // concatenate all elements in array to form a full string.
  for (let s of A) {
    fullString += s;
  }

  // try all possible combination of concatenation

  let length = longestSubString(fullString);
  return length;
}

const longestSubString = function(str) {
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

//let A = ["co", "dil", "ity"];
let A = ["abc", "yyy", "def", "csv"];
console.log(solution(A));
