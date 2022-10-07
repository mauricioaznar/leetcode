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
var maxDepth = function(root) {
    return helper(root, 1)


};


var helper = function (node, level) {
    if (!node) {
        return level - 1
    }

    return Math.max(helper(node.left, level + 1), helper(node.right, level + 1))
}