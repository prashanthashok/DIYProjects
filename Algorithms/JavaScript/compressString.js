function compressString(str) {
  if (!str) return;
  console.log(str);
  let arr = str.trim().split("");
  let prev = arr[0];
  let curr = "";
  let count = 1;
  let compressed = "";
  for (let i = 1; i < arr.length; i++) {
    curr = arr[i];
    if (prev === curr) {
      console.log("prev " + prev + " || curr " + curr);
      count++;
    } else {
      compressed = compressed + prev + count;
      console.log("compressed so far", compressed);
      count = 1;
    }

    prev = curr;
  }
  compressed = compressed + prev + count;
  return compressed.length < str.trim().length ? compressed : str;
}

console.log(compressString("aaaacccccaab   "));
