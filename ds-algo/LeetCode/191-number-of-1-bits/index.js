/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
    if (n===0) return 0;
    
    let count = 0;
    
    while(n){
        
        n = n & (n-1);
        count++;
    }
    
    return count;
};

module.exports = hammingWeight;