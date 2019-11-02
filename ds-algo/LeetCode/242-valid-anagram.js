/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;

  let sArr = s
    .split("")
    .sort()
    .join("");
  let tArr = t
    .split("")
    .sort()
    .join("");

  console.log(sArr);
  console.log(tArr);
  return sArr === tArr;
  //return sArr.sort() == tArr.sort();
};
