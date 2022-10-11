/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const nums = []

    for (let i = 0; i < numRows; i++) {
        nums.push([])
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                nums[i][j] = 1
                continue;
            } else if (i > 0) {
                nums[i][j] = nums[i - 1][j] + nums[i - 1][j - 1]
            }
        }
    }

    return nums
};
