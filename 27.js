/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = nums.length
    let i = 0

    while (i < k) {
        if (nums[i] === val) {
            let j = i + 1
            while (j < k) {
                nums[j - 1] = nums[j]
                j++
            }
            k--
        } else {
            i++
        }
    }

    return k
};