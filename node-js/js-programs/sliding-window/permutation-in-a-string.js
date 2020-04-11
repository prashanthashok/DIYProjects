const find_permutation = function (str, pattern) {
  // TODO: Write your code here
  if (str.length < 1 || pattern.length < 1) return false;

  let patternMap = {};

  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];
    if (!patternMap[c]) {
      patternMap[c] = 0;
    }
    patternMap[c] = patternMap[c] + 1;
  }
  let map = {};
  Object.assign(map, patternMap);
  let start = 0;
  let end = pattern.length - 1;

  while (end < str.length) {
    let index = start;
    let charCount = pattern.length;
    while (end - start + 1 === pattern.length) {
      const c = str[index];
      if (patternMap[c] >= 0) {
        patternMap[c] = patternMap[c] - 1;
        charCount--;
        if (patternMap[c] < 0) {
          start++;
          Object.assign(patternMap, map);
        }
        index++;
      } else {
        start++;
      }
    }
    if (charCount === 0) {
      return true;
    }
    end++;
  }
  return false;
};

console.log(find_permutation("aaacb", "abc"));
