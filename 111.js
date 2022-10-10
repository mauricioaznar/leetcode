/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    return helper(root)
};

var helper = function(node) {
    if (!node) {
        return 0
    } else if (!node.left && !node.right) {
        return 1
    } else if (!node.left && node.right) {
        return helper(node.right) + 1
    } else if (node.left && !node.right) {
        return helper(node.left) + 1
    }

    return Math.min(helper(node.left), helper(node.right)) + 1
}
