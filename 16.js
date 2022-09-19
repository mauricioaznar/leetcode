/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let res = Infinity
    nums.sort((a, b) => a - b)
    
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        let l = i + 1;
        let r = nums.length - 1;
        
        while (l < r) {
            const sum = curr + nums[l] + nums[r]
            const dif = Math.abs(target - sum)
            
            if (sum < target) {
                l = l + 1
            } else {
                r = r - 1
            }
            
            if (dif < Math.abs(res - target)) {
                res = sum
            }       
        }
    }
    return res
};
