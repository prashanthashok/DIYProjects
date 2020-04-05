/**
 * @param {number[]} arr
 * @return {number}
 */
var numberOfArithmeticSlices = function(arr) {
  if (arr.length < 3) return 0;

  let start = 0;
  let end = 1;
  let result = [];
  let offset = 0;

  while (end < arr.length - 1) {
    if (arr[end] - arr[end - 1] === arr[end + 1] - arr[end]) {
      result.push(arr.slice(start, end + 2));

      if (end - start >= 2) {
        offset++;
        result.push(arr.slice(start + offset, end + 2));
      }
    } else {
      start = end;
      offset = 0;
    }
    end++;
  }
  return result.length;
};

//let arr = [1, 2, 3, 4];
//let arr = [-1, 1, 3, 3, 3, 2, 3, 2, 1, 0];
let arr = [1, 2, 3, 4, 5, 6];
console.log(numberOfArithmeticSlices(arr));
