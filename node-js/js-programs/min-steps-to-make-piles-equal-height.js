function minSteps(piles) {
  let numSteps = 0;

  if (piles.length < 1) return 0;

  piles.sort((a, b) => b - a);

  let numDistinct = 0;
  for (let i = 1; i < piles.length; i++) {
    if (piles[i] < piles[i - 1]) {
      numSteps += i;
    }
  }

  return numSteps;
}

console.log(minSteps([1, 5, 2, 7, 3]));
