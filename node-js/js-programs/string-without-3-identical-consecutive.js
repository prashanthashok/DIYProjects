const stringWithoutThreeIdenticalConsecutive = function(str) {
  if (str.length < 3) return str;

  // iterate each char
  // push character to array and track count
  // if current character same as prev character, increase count, else reinitialize count to 0
  // if current character same as prev character and count = 3, discard current char and move to next
  // return string

  let count = 1;
  let result = [str[0]];
  for (let i = 1; i < str.length; i++) {
    const current = str[i];

    result.push(current);
    const previous = result[result.length - 2];
    if (current === previous) {
      count++;
      if (count >= 3) {
        result.pop();
      }
    } else {
      count = 1;
    }
  }

  return result.join("");
};

let str = "eedaaad";
console.log(stringWithoutThreeIdenticalConsecutive(str));

let str1 = "xxxtxxx";
console.log(stringWithoutThreeIdenticalConsecutive(str1));
let str2 = "uuuuxaaaaxuuu";
console.log(stringWithoutThreeIdenticalConsecutive(str2));
