/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let white = 0
    let red = 0
    let blue = nums.length - 1


    while (white <= blue) {
        if (nums[white] === 1) {
            white++
        } else if (nums[white] === 0) {
            [nums[white], nums[red]] = [nums[red], nums[white]]
            white++
            red++
        } else {
            [nums[white], nums[blue]] = [nums[blue], nums[white]]
            blue--
        }
    }

};

/*
    Notes: bucket sort
*/