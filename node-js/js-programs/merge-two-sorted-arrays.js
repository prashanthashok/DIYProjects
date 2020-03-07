function mergeArrays(arr1, arr2) {
  if (arr1.length < 1 && arr2.length < 1) return;

  if (arr1.length < 1 && arr2.length > 1) return arr2;
  if (arr1.length > 1 && arr2.length < 1) return arr1;

  let i = 0;
  let j = 0;

  let merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else if (arr1[i] >= arr2[j]) {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

let arr1 = [];
let arr2 = [2, 6, 7, 8];

console.log(mergeArrays(arr1, arr2));
