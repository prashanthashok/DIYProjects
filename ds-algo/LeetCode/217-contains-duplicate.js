/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length < 2) return false;
    
//     if(nums.length == 2) {
//         return nums[0] === nums[1];
//     }
    
    let counter = {};
    
    for(let i = 0; i<nums.length;i++){
        if(counter[nums[i]] >= 1) {
            return true;
        } else if(!counter[nums[i]]) {
            counter[nums[i]] = 1;
        } else {
            counter[nums[i]] += 1;
        }
        
    }
    
    return false;
    
};