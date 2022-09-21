/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1
    
    
    while (l <= r) {
        let mid = Math.floor((r - l) / 2) + l
    
        if (nums[mid] === target) {
            return mid
        }
        
        if (nums[l] <= nums[mid]) { // left side            
            if (target > nums[mid] || target < nums[l]) {
                l = mid + 1
            } else {
                r = mid - 1
            }    
        } else { // right side
            if (target < nums[mid] || target > nums[r]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }    
    }
    
    
    return -1
};
