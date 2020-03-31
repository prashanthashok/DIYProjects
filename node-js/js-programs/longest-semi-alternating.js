const longestSemiAlternative = function(str) {
  if (str.length < 3) return str.length;

  let start = 0;
  let end = 1;
  let charMap = new Map();
  let maxLength = 0;
  let count = 0;

  while (end < str.length) {
    if (str[end] != str[end - 1]) {
      charMap.set(str[end], end);
      count = 1;
      maxLength = Math.max(maxLength, end - start + 1);
      end++;
      //maxLength++;
    } else {
      count++;
      if (count < 3) {
        charMap.set(str[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
        end++;
        //maxLength++;
      } else {
        start = end - 1;
        charMap.set(str[end], end);
        end++;
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
    //maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

let str = "baaabbabbb";
console.log(longestSemiAlternative(str));

let str1 = "babba";
console.log(longestSemiAlternative(str1));

let str2 = "abaaaa";
console.log(longestSemiAlternative(str2));
