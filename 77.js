/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const nums = new Array(n).fill(null).map((e, i) => i + 1)
    const res = []

    helper(res, nums, [], k, 0)

    return res
};


var helper = function (res, nums, path, k, i) {
    if (i > nums.length) {
        return
    }


    if (path.length === k) {
        res.push(path)
        return
    }

    for (let j = i; j < nums.length; j++) {
        helper(res, nums, [...path, nums[j]], k, j + 1)
    }
}