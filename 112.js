
0/5
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    return helper(root, targetSum, 0)
};

var helper = function (node, target, sum) {
    const currSum = sum + node.val

    if (!node.left && !node.right) {
        if (target !== currSum) {
            return false
        }
        return true
    }


    const left = node.left ? helper(node.left, target, currSum) : false
    const right = node.right ? helper(node.right, target, currSum) : false

    return left || right
}