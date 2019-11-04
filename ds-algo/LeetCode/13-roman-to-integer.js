/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if (s.length < 1) return 0;
  let romanCharacters = {};
  romanCharacters.I = 1;
  romanCharacters.V = 5;
  romanCharacters.X = 10;
  romanCharacters.L = 50;
  romanCharacters.C = 100;
  romanCharacters.D = 500;
  romanCharacters.M = 1000;

  //console.log(romanCharacters);

  let intNum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "I" && (s[i + 1] == "V" || s[i + 1] == "X")) {
      intNum = intNum + romanCharacters[s[i + 1]] - 1;
      i++;
    } else if (s[i] == "X" && (s[i + 1] == "L" || s[i + 1] == "C")) {
      intNum = intNum + romanCharacters[s[i + 1]] - 10;
      i++;
    } else if (s[i] == "C" && (s[i + 1] == "D" || s[i + 1] == "M")) {
      intNum = intNum + romanCharacters[s[i + 1]] - 100;
      i++;
    } else {
      intNum += romanCharacters[s[i]];
    }
  }
  return intNum;
};

module.exports = romanToInt;
