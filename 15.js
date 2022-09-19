/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let res = []
    nums.sort((a, b) => a - b)
    
    
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }
        
        const curr = nums[i]
        let l = i + 1
        let r = nums.length - 1
        
        
        while (l < r) {
            
            const sum = curr + nums[l] + nums[r]
            
            if (sum === 0) {
                res.push([curr, nums[l], nums[r]])
                l = l + 1
                while (nums[l - 1] === nums[l]) {
                    l = l + 1
                }
            } else if (sum > 0) {
                r = r - 1
            } else if (sum < 0) {
                l = l + 1
            }
        }
        
    }
    
    return res
    
};
