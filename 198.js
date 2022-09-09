/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    let rob1 = 0
    let rob2 = 0

    let i = 0

    while (i < nums.length) {
        const temp = Math.max(nums[i] + rob1, rob2)

        rob1 = rob2
        rob2 = temp


        i++
    }


    return rob2
};