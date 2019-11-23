/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  //store each character and it's occurrence in a hash table
  //in another for-loop, check the occurrence count for each character
  //return the index of the first character that has an occurrence count of 1

  if (s.length < 1) return -1;
  if (s.length < 2) return 0;

  let occurrences = {};

  for (let i = 0; i < s.length; i++) {
    if (occurrences[s[i]]) {
      occurrences[s[i]] += 1;
    } else {
      occurrences[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (occurrences[s[i]] == 1) {
      return i;
    }
  }

  return -1;
};
