/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (num.length < 1) return;

  if (num.length === k) return "0";

  //if (k === 1) return (+num.substring(1)).toString();

  let stack = [];

  for (let d = 0; d < num.length; d++) {
    const digit = num[d];
    while (stack.length > 0 && k > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  return (+stack.join("")).toString();
};

// let num = "10200";
// let k = 1;

// let num = "10";
// let k = 2;

// let num = "1432219";
// let k = 3;

let num = "112";
let k = 1;

console.log(removeKdigits(num, k));
