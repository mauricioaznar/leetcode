/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0
    let r = height.length - 1
    let res = 0
    
    while (l < r) {
        res = Math.max(res, (r - l) * Math.min(height[l], height[r]))
        if (height[l] > height[r]) {
            r = r - 1
        } else {
            l = l + 1
        }
    }
    
    return res
};
