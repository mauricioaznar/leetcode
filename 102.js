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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return helper(root.left, root.right)
};


var helper = function (a, b) {
    if (a === null && b === null) {
        return true
    }

    if (a === null || b === null) {
        return false
    }

    return a.val === b.val && helper(a.left, b.right) && helper(a.right, b.left)
}
