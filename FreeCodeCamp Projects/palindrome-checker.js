function palindrome(str) {
  // Good luck!
  var arr = str.match(/[a-z0-9]+/ig);
  console.log(arr)
  var orig = arr.join('').toLowerCase();
  var reverse = orig.split('').reverse().join('');
  if(orig === reverse) return true;
  else return false;
}



palindrome("1 eye for of 1 eye.")