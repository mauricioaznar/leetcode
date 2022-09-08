/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length

    swap(nums, 0, nums.length -1)
    swap(nums, 0, k - 1)
    swap(nums, k, nums.length -1)

};


var swap = function (arr, start, end) {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]

        start++
        end--
    }
}