/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    if(!nums) return 0;
    
    let evens = 0;
    
    nums.filter(x => {
        if(x!=0 && Math.floor(Math.log10(x)+1)%2==0) {
            evens++;
        }
    });
    return evens;
};