function solution(A, K) {
  var n = A.length;
  for (var i = 0; i < n - 1; i++) {
    if (A[i] + 1 < A[i + 1]) return false;
  }
  if (A[0] != 1 || A[n - 1] != K) return false;
  else return true;
}

let A = [1, 1, 2, 3, 4];
//let A = [1, 1, 3];
console.log(solution(A, 5));
