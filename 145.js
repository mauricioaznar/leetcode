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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const stack = []
    let curr = root
    const res = []

    while (curr || stack.length > 0) {
        if (curr) {
            stack.push(curr)
            res.unshift(curr.val)
            curr = curr.right

        } else if (stack.length > 0) {
            const node = stack.pop()
            curr = node.left
        }


    }

    return res


};