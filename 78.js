/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = []

    helper(res, nums, [], 0)

    return res
};


var helper = function(res, nums, path, i) {

    res.push(path)

    for (let j = i; j < nums.length; j++) {
        const num = nums[j]

        helper(res, nums, [...path, num], j + 1)
    }


}