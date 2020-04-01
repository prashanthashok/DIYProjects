const largestAlphabetic = function(str) {
  if (str.length < 2) return "NO";

  let charMap = Array(58).fill("");

  for (let i = 0; i < str.length; i++) {
    charMap[Math.abs(str[i].charCodeAt(0) - "A".charCodeAt(0))] = str[i];
  }

  console.log(charMap);

  let i = charMap.length - 1;

  while (i >= 0) {
    if (charMap[i] != "") {
      let upperCaseIndex = i - 32;
      if (charMap[upperCaseIndex] != "") {
        break;
      }
    }
    i--;
  }
  console.log(charMap[i]);
  console.log("end");
  return charMap[i - 32] != "" ? charMap[i - 32] : "NO";
};

let str = "admeDCAB";

console.log(largestAlphabetic(str));
