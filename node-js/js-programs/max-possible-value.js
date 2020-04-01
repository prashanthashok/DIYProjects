const maxPossibleValue = function(num) {
  if (num > 0) {
    return maxPositive(num);
  } else {
    return maxNegative(num);
  }
};

const maxPositive = function(num) {
  let str = num.toString();
  if (+str[0] <= 5) return 5 + str;
  let i = 1;
  for (; i < str.length; i++) {
    if (str[i] <= 5) break;
  }

  let newNum = str.substring(0, i) + "5" + str.substring(i + 1);
  return newNum;
};

const maxNegative = function(num) {
  let str = num.toString();
  if (+str[1] >= 5) return -+5 + str.substring(1);
  let i = 2;
  for (; i < str.length; i++) {
    if (str[i] >= 5) break;
  }

  let newNum = str.substring(0, i) + "5" + str.substring(i + 1);
  return newNum;
};

//let num = 268;
//let num = 6750;
//let num = -999;
let num = -555;
console.log(maxPossibleValue(num));
