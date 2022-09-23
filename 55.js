/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let jumps = nums[0]
    let i = 0
    while (jumps >= 0) {
        jumps = nums[i] > jumps ? nums[i] : jumps
        
        if (jumps > 0) {
            i++
        }
        
        
        
        jumps--
    }
    
    return i >= nums.length - 1    
};
