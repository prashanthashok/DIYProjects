const widestVerticalPath = function(X, Y) {
  if (X.length < 2) return;

  X.sort((a, b) => a - b);

  let maxWidth = 0;

  for (let i = 1; i < X.length; i++) {
    maxWidth = Math.max(maxWidth, X[i] - X[i - 1]);
  }

  return maxWidth;
};

// let X = [5, 5, 5, 7, 7, 7];
// let Y = [3, 4, 5, 1, 3, 7];

let X = [6, 10, 1, 4, 3];
let Y = [2, 5, 3, 1, 6];

console.log(widestVerticalPath(X, Y));
