/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    //let explorer = 0;
    let anchor = 0;
    
    // if(nums.length == 1 && nums[0] == 0) return;
    // if(nums.length == 1 && nums[0] != 0) return nums;
    
    // while(explorer < nums.length) {
    //     if(nums[explorer] == 0) {
    //         explorer++;
    //     }
    //     swap(nums, explorer, anchor);
    //     explorer++;
    //     anchor++;
    // }
    
    for(let explorer = 0; explorer < nums.length; explorer++) {
        if(nums[explorer] !== 0){
            //swap(nums, explorer, anchor);
            let temp = nums[anchor];
            nums[anchor] = nums[explorer];
            nums[explorer] = temp;
            anchor++;
        }
    }
    
    
};

// const swap = function(nums, explorer, anchor){
//         nums[explorer] = nums[explorer] ^ nums[anchor];
//         nums[anchor] = nums[explorer] ^ nums[anchor];
//         nums[explorer] = nums[explorer] ^ nums[anchor];
        
//     }