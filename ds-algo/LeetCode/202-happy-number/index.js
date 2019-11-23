/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let retriesLeft = 5;

debugger;
let digits = splitNumberIntoDigits(n);
let sum = 0;
while (sum != 1 || retriesLeft === 0) {
  while (digits.length > 0) {
    let digit = digits.shift();
    sum = sum + digit * digit;
  }
  if (sum != 1) {
    digits = splitNumberIntoDigits(sum);
    sum = 0;
    retriesLeft--;
  }
  
}

if (sum === 1) {
  return true;
} else {
  return false;
}
};

const splitNumberIntoDigits = function(n) {
let digits = [];
while (n) {
  digits.unshift(n % 10);
  n = Math.floor(n / 10);
}
return digits;
}