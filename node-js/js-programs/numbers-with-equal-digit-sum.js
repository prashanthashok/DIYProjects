const equalDigitSum = function(arr) {
  let digitSums = new Map();
  let result = 0;
  arr.forEach(digit => {
    let sum = calculateDigitSum(digit);

    let digitSum = digitSums.get(sum);
    if (digitSum) {
      result = Math.max(result, digitSum + digit);
      digitSums.set(sum, Math.max(digitSum, digit));
    } else {
      digitSums.set(sum, digit);
    }
  });

  return result;
};

/*
@param digit {number}
@return sum {number}
*/
const calculateDigitSum = function(digit) {
  let sum = 0;
  while (digit > 0) {
    sum += digit % 10;
    digit = Math.floor(digit / 10);
  }
  return sum;
};

//let arr = [51, 71, 17, 42];
let arr = [42, 33, 60];
console.log(equalDigitSum(arr));
