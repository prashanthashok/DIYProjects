/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) return true;

  const lowerCaseSplit = s.toLowerCase().match(/[a-zA-Z0-9]/gi);
  if (!lowerCaseSplit || lowerCaseSplit.length == 1) return true;

  let left = 0;
  let right = lowerCaseSplit.length - 1;
  while (left <= right) {
    if (lowerCaseSplit[left] !== lowerCaseSplit[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
