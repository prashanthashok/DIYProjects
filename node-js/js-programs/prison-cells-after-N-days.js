/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  let oldState = cells;
  let newState = [];

  for (N = ((N - 1) % 14) + 1; N > 0; --N) {
    for (let i = 0; i < cells.length; i++) {
      if (i === 0 || i === cells.length - 1) {
        newState[i] = 0;
      }
      if (
        (oldState[i - 1] === 0 && oldState[i + 1] === 0) ||
        (oldState[i - 1] === 1 && oldState[i + 1] === 1)
      ) {
        newState[i] = 1;
      } else {
        newState[i] = 0;
      }
    }
    oldState = newState.slice();
  }
  return newState;
};

// let cells = [0, 1, 0, 1, 1, 0, 0, 1],
//   N = 7;

let cells = [1, 0, 0, 1, 0, 0, 1, 0],
  N = 1000000000;

console.log(prisonAfterNDays(cells, N));
