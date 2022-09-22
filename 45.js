/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let currEnd = 0
    let currFurthest = 0
    let jumps = 0

    let i = 0



    while (i < nums.length - 1) { // loop until the end of the array
        currFurthest = Math.max(currFurthest, nums[i] + i)


        if (currEnd === i) { // if we have reached the end of our jump we changed it for the next biggest jump
            currEnd = currFurthest
            jumps++ // update it only when we have made the end of one jump
        }
        i++
    }


    return jumps


};