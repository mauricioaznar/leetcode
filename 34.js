/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const left = binarySearch (nums, target, true)
    const right = binarySearch (nums, target, false)
    return [left, right]
};

var binarySearch = function (nums, target, leftBias) {
    let l = 0
    let r = nums.length - 1
    let i = -1
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2)
        if (target > nums[mid]) {
            l = mid + 1
        } else if (target < nums[mid]) {
            r = mid -1
        } else if (target === nums[mid]) {
            i = mid
            if (leftBias) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }
    return i
}