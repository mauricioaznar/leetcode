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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let node = root
    while (node) {
        let left = node.left
        if (left) {
            let tempRight = node.right
            let leftDown = left
            while (leftDown.right) {
                leftDown = leftDown.right
            }

            leftDown.right = tempRight
            node.right = left
            node.left = null
        }

        node = node.right
    }

    return root
};
