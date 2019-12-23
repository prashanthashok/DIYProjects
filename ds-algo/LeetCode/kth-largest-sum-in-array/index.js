const findKthLargest = function(nums, k) {
    debugger;
    nums.sort((a,b)=>b-a);
    return nums[k-1];
    //let counter = 1;
    // for(let i = 0; i<nums.length;i++){
    //         if(counter === k) return nums[i];
    //         counter++;
    // }
};

module.exports = findKthLargest;