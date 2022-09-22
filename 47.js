/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = []

    nums.sort((a, b) => {
        return a - b
    })

    helper(nums, res, [])

    return res

};


var helper = function (nums, res, comb) {
    if (nums.length === 0) {
        res.push(comb)
        return;
    }


    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }

        const num = nums[i]
        const sliced = nums.slice(0, i).concat(nums.slice(i + 1, nums.length))
        helper(sliced, res, [...comb, num])
    }



}