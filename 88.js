/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let curr = m + n - 1
    m = m - 1
    n = n - 1


    while (m >= 0 || n >= 0) {
        if (m >= 0 && n >= 0) {
            if (nums1[m] > nums2[n]) {
                nums1[curr] = nums1[m]
                curr--
                m--
            } else {
                nums1[curr] = nums2[n]
                curr--
                n--
            }
        } else if (m >= 0) {
            nums1[curr] = nums1[m]
            curr--
            m--
        } else {
            nums1[curr] = nums2[n]
            curr--
            n--
        }


    }
};

/* Notes:
    Substitute starting from the back
 */