const lexSmallestString = function(str) {
  if (str.length < 1) return "";

  let newString = "";

  let orgLength = str.length;
  for (let i = 0; i < str.length; i++) {
    if (str[i] > str[i + 1]) {
      newString = str.substring(0, i) + str.substring(i + 1);
      return newString;
    }
  }

  newString = str.substring(0, str.length - 1);
  return newString;
};

//let str = "abczabcabzababad";
//let str = "abcd";
let str = "abczd";
console.log(lexSmallestString(str));
