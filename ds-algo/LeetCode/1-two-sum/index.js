/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 //Brute force O(N^2) solution which checks every element against 
 //every other element until target is found
// var twoSum = function(nums, target) {
//     if(nums.length < 1) return [];
    
//     for(let i = 0; i < nums.length; i++) {
        
//         for(let j = i+1; j < nums.length; j++){
            
//             if(nums[i] + nums[j] === target) {
//                 return [i,j];
//             }
//         }
//     }
//     return [];
// };


//One pass Hash/Map solution with O(N) runtime and O(N) space
var twoSum = function(nums, target) {
    if(nums.length < 1) return [];
    
    let complements = new Map();
    
    
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(complements.has(complement)) return[i, complements.get(complement)];
        
        complements.set(nums[i], i);
    }
};