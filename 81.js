0/5
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        while (nums[left] === nums[right] && left !== right) {
            right = right - 1
        }

        const mid = left + Math.floor((right - left) / 2)

        console.log('left',left,'right',right,'mid',mid)

        
        if (nums[mid] === target) {
            return true
        } else if (nums[mid] >= nums[left]) { // left side
            if (target <= nums[mid] && target >= nums[left]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else { // right side
            if (target >= nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return false
};
