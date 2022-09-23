/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0]
    let maxSum = nums[0]
    
    let i = 1
    
    while (i < nums.length) {
        // if nums[i] is lower and sum is bigger than 0, the contiguous sequence will continue
        sum = Math.max(nums[i], nums[i] + sum)
        
        if (sum > maxSum) {
            maxSum = sum
        }
        
        i++
    }
    
    return maxSum
    
    
};
