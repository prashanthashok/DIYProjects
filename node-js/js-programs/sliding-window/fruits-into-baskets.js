const fruits_into_baskets = function(fruits) {
  // TODO: Write your code here
  if (fruits.length < 1) return -1;

  let maxFruits = 0;

  let start = 0;
  let end = 1;
  let baskets = new Map();
  baskets.set(fruits[start], 1);
  let numDistinct = 1;
  for (end; end < fruits.length; end++) {
    if (!baskets.has(fruits[end])) {
      baskets.set(fruits[end], 1);
      numDistinct++;
    } else {
      baskets.set(fruits[end], baskets.get(fruits[end]) + 1);
    }
    while (numDistinct > 2) {
      baskets.set(fruits[start], baskets.get(fruits[start]) - 1);
      if (baskets.get(fruits[start]) == 0) {
        baskets.delete(fruits[start]);
        numDistinct--;
      }
      start++;
    }
    // maxFruits = Math.max(
    //   maxFruits,
    //   baskets.get(fruits[start]) + baskets.get(fruits[end])
    // );
  }

  for (let value of baskets.values()) {
    maxFruits += value;
  }
  return maxFruits;
};

console.log(fruits_into_baskets(["A", "B", "C", "A", "C"]));
