function makeAnagram(a, b) {
  if (!a || !b || a.length < 1 || b.length < 1) return;

  let map1 = new Map();
  let map2 = new Map();
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    map1.set(a[i], map1.get(a[i]) + 1 || 1);
  }

  for (let i = 0; i < b.length; i++) {
    if (map1.get) map1.set(b[i], map1.get(b[i]) ? map1.get(b[i]) - 1 : 1);
  }

  //for (let key in map1.keys()) {
  function countMissing(value, key, map) {
    count += Math.abs(value);
  }
  map1.forEach(countMissing);

  //}
  return count;
  //compare the two maps
}

module.exports = makeAnagram;
