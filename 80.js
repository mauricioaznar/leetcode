/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = nums.length

    let i = 1;

    while (i < k - 1) {
        const curr = nums[i]
        const prev = nums[i - 1]
        const next = nums[i  + 1]

        if (curr === prev && curr === next) {
            displace(nums, i)
            k--
        } else {
            i++
        }
    }

    return k
};


var displace = function(nums, i) {
    while (i < nums.length - 1) {
        const curr = nums[i]
        const next = nums[i + 1]
        nums[i] = next
        i++
    }
}