/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const nums = []
    for (let i = 0; i < rowIndex + 1; i++) {
        nums.push([])
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                nums[i][j] = 1
                continue;
            } else if (i > 0) {
                nums[i][j] = nums[i - 1][j - 1] + nums[i - 1][j]
            }
        }

    }

    return nums[rowIndex]
}; 
