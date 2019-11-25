/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  debugger;
  if (numRows == 0) return [];
  if (numRows == 1) return [1];
  if (numRows == 2) return [[1], [1, 1]];

  let pascalsTriangle = [];

  pascalsTriangle[0] = [1];
  pascalsTriangle[1] = [1, 1];
  for (let i = 2; i < numRows; i++) {
    let tempArr = [];
    tempArr.push(1);
    for (let curr = 0; curr < i - 1; curr++) {
      let element =
        pascalsTriangle[i - 1][curr] + pascalsTriangle[i - 1][curr + 1];
      tempArr.push(element);
    }
    tempArr.push(1);
    pascalsTriangle[i] = tempArr;
  }
  return pascalsTriangle;
};

module.exports = generate;
