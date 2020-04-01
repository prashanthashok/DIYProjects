/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  // iterate through searchWord
  // for each letter, search products array to find matching words with the same prefix in searchWord seen "so far"
  let searchResults = [];
  let prefix = "";
  for (let i = 0; i < searchWord.length; i++) {
    prefix += searchWord[i];
    let result = findMatchingResults(products, prefix);
    console.log(result);
    searchResults.push(result);
    searchResults.push(1);
    console.log(searchResults);
    //searchResults.push(findMatchingResults(products, prefix));
  }
  // if search result > 3, sort lexicographically
  // add the result to output array
  //console.log(searchResults);
  //return searchResults;
};

/**
 * @param {string} prefix
 * @return {string[]}
 */
const findMatchingResults = function(products, prefix) {
  let result = products;
  for (let i = 0; i < prefix.length; i++) {
    for (let j = 0; j < result.length; j++) {
      let product = result[j];
      //console.log(`product ${product}`);
      if (product[i] === prefix[i]) continue;
      else result.splice(j, 1);
    }
  }
  console.log(`result ${result}`);
  return result;
};

let products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
  searchWord = "mouse";
console.log(suggestedProducts(products, searchWord));
