/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = []
    nums.sort((a, b) => a - b)
    helper(res, nums, [], 0)
    return res
};

var helper = function(res, nums, path, i) {
    res.push(path)

    for (let j = i; j < nums.length; j++) {
        if (j > i && nums[j - 1] === nums[j]) {
            continue;
        }
        helper(res, nums, [...path, nums[j]], j + 1)
    }
}