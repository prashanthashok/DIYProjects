function solution(A, B, N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxRank = 0;

  let edges = Array(N + 1).fill(0); //initialize an empty array of edges for N cities with 0

  for (let i = 0; i < A.length; i++) {
    edges[A[i]] += 1;
    edges[B[i]] += 1;
  }

  for (let i = 0; i < A.length; i++) {
    let currentMax = edges[A[i]] + edges[B[i]] - 1; // remove duplicate edge from each pair of city (A,B) as they are bidirectional
    maxRank = Math.max(maxRank, currentMax);
  }
  console.log(maxRank);
  return maxRank;
}

let A = [1, 2, 3, 3];
let B = [2, 3, 1, 4];
let N = 4;
console.log(solution(A, B, N));
