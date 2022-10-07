/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return helper(nums)
};
 
var helper = function (nums) {
    if (nums.length === 0) {
        return null
    }

    const index = Math.floor(nums.length / 2)

    const val = nums[index]

    const node = new TreeNode(val)

    node.left = helper(nums.slice(0, index))
    node.right = helper(nums.slice(index + 1, nums.length))

    return node



}
