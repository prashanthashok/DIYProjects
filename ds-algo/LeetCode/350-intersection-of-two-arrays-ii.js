/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    
    
    if(nums1.length < 1 || nums2.length < 1) return [];
    
    //use Javascript object to store all numbers from nums1
    let nums1HashTable = {};
    let intersection = [];
    
    //insert all elements with {num: # of times it appears}
    for(let i = 0; i < nums1.length; i++){
        if(nums1HashTable[nums1[i]]) {nums1HashTable[nums1[i]] += 1;}
        else {
            nums1HashTable[nums1[i]] = 1;
        }
    }
    
    //for each element in nums2, check if it exists in nums1HashTable
    //if it does, then add it to the output array
    
    for(let j=0;j<nums2.length; j++){
        if(nums1HashTable[nums2[j]] > 0) 
        {
            intersection.push(nums2[j]);
            nums1HashTable[nums2[j]]--;
        }
    }
    
    return intersection;
};