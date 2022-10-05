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
 * @return {boolean}
 */
var isValidBST = function(root) {


    var helper = function (root, low, high) {
        if (root === null) {
            return true;
        }

        if (low !== null && root.val <= low.val) {
            return false;
        }

        if (high !== null && root.val >= high.val) {
            return false;
        }

        return helper(root.left, low, root) && helper(root.right, root, high)
    }


    return helper(root, null, null)
};