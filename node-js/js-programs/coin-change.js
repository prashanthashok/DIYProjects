/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
  if (coins.length < 1) return -1;
  if (amount < 0) return -1;

  let n = coins.length;
  let dp = Array(n)
    .fill(0)
    .map(() => Array(amount + 1).fill(0));

  for (let i = 0; i < n; i++)
    for (let j = 0; j <= amount; j++) dp[i][j] = Number.MAX_VALUE;

  for (let i = 0; i < n; i++) dp[i][0] = 0;
  //console.log(dp);

  for (let i = 0; i < n; i++) {
    for (let c = 1; c <= amount; c++) {
      if (i > 0) {
        dp[i][c] = dp[i - 1][c];
      }
      if (c >= coins[i]) {
        dp[i][c] = Math.min(dp[i][c], dp[i][c - coins[i]] + 1);
      }
    }
  }

  return dp[n - 1][amount] > 0 ? dp[n - 1][amount] : -1;
};

let amount = 11;
let coins = [1, 2, 5];

console.log(coinChange(coins, amount));
