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
var inorderTraversal = function(root) {
    const stack = []
    const res = []
    let curr = root

    while (stack.length > 0 || curr !== null) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }

        const last = stack.pop()
        res.push(last.val)
        curr = last.right


    }

    return res

};