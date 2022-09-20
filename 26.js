/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = nums.length
    let i = 1

    while (i < k) {
        // if previous element is equal, slide array to the left from the next element to the end of array
        if (i > 0 && nums[i] === nums[i - 1]) {
            let j = i + 1
            // slide next elements until end of array
            while (j < k) {
                nums[j - 1] = nums[j]
                j++
            }

            // reduce array size
            k--
        } else {
            i++
        }
    }


    return k
};