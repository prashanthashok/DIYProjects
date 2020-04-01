const change = function(amount, coins) {
  if (coins.length < 1 && amount == 0) return 1;
  if (coins.length < 1) return 0;
  if (amount <= 0) return 1;

  let capArray = Array(amount + 1).fill(0);
  let dp = Array(coins.length).fill(capArray);
  let n = coins.length;

  for (let i = 0; i < n; i++) dp[i][0] = 1;
  for (let index = 0; index < n; index++) {
    for (let capacity = 1; capacity <= amount; capacity++) {
      if (index > 0) dp[index][capacity] = dp[index - 1][capacity];
      if (capacity >= coins[index])
        dp[index][capacity] += dp[index][capacity - coins[index]];
    }
  }

  return dp[n - 1][amount] > 0 ? dp[n - 1][amount] : 0;
};

let amount = 5;
let coins = [1, 2, 5];

console.log(change(amount, coins));
