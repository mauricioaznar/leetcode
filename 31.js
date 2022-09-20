/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    let i = nums.length - 2

    // find the first decline and get the starting number (lowest number in the decline --> left)
    while (i >= 0 && nums[i] >= nums[i + 1])  {
        i--
    }

    // if there isnt a decline, it means it is the last permutation. reverse the array to be sorted asc
    if (i < 0) {
        nums.reverse()
        return
    }


    let j = nums.length - 1
    let diff = Infinity
    let z = j


    // find the next number after the decline starting number and swap them
    while (i < j) {
        let localDiff = nums[j] - nums[i]
        if (localDiff > 0 && localDiff < diff) {
            diff = localDiff
            z = j
        }

        j--
    }

    swap(nums, i, z)

    // sort ascending after the position where the starting number was
    insertionSort(nums, i + 1)


};

var swap = function (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

}

var insertionSort = function(arr, i) {
    for (let j = i; j < arr.length - 1; j++) {
        let minIndex = j + 1

        for (let k = minIndex + 1;  k < arr.length; k++) {
            if (arr[k] < arr[minIndex]) {
                minIndex = k
            }
        }

        if (arr[minIndex] < arr[j]) {
            swap(arr, j, minIndex)
        }

    }

}