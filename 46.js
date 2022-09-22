/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    helper(nums, res, [])
    return res
};

var helper = function (nums, res, comb) {
    if (nums.length === 0) {
        res.push(comb)
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const sliced = nums.slice(0, i).concat(nums.slice(i + 1, nums.length))
        helper(sliced, res, [...comb, num])
    }
}